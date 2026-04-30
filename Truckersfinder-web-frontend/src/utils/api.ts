import configs from '../config/enviroment'
import { errorsApi } from './errors'

export type RequestData = Record<string, unknown> | null

export interface RequestErrorAPI {
    code: string
    title: string
    detail: string
    status: number
    params?: Record<string, unknown>
}

export type RequestError = RequestErrorAPI | null | undefined

export enum RequestStatus {
    Idle = 'idle',
    Pending = 'pending',
    Succeeded = 'succeeded',
    Failed = 'failed',
}

interface Config {
    token: string | null
    brandId?: string
    dispatch?: any
}

const parseResponse = async (response: Response, contentType: string) => {
    switch (contentType) {
        case 'text/csv':
        case 'text/plain':
        case 'text/html':
        case 'text/xml':
            return response.text()
        case 'application/pdf':
            return response.blob()
        case 'text/event-stream':
            return response.body
        default:
            return response.json()
    }
}

const handleError = (status: number, parsed: Record<string, unknown>) => {
    switch (status) {
        case 405:
            return errorsApi.methodNotAllowed
        case 500:
            return errorsApi.internalServerError
        case 501:
            return errorsApi.notImplemented
        case 502:
            return errorsApi.badGateway
        case 503:
            return errorsApi.tempUnavailable
        case 504:
            return errorsApi.gatewayTimeout
        default:
            return parsed
    }
}

class AdminAPI {
    apiUrl: string
    token: string | null
    brandId?: string
    dispatch?: any

    constructor(config: Config) {
        this.apiUrl = configs.apiUrl
        this.token = config.token
        this.brandId = config.brandId
        this.dispatch = config.dispatch
    }

    request = async <T>(
        endpoint: string,
        method?: string,
        data?: any
    ): Promise<T | null | undefined> => {
        return new Promise(async (resolve, reject) => {
            try {
                const url = `${this.apiUrl}/${endpoint}`
                const res = await fetch(url, {
                    method,
                    headers: {
                        Authorization: `Bearer ${this.token}`,
                        'brand-id': `${this.brandId}`,
                        'Content-Type': 'application/json',
                    },
                    body: data ? JSON.stringify(data) : null,
                })

                // user token has expired
                if (res.status === 401 && this.dispatch) {
                    // this.dispatch(refreshSession())
                }

                if (res.status === 204) {
                    return resolve(null)
                }

                const contentType = res.headers
                    .get('Content-Type')
                    ?.split(';')[0]
                if (!contentType) {
                    return reject(errorsApi.internalServerError)
                }

                const parsed = await parseResponse(res, contentType)
                if (!res.ok) {
                    const error = handleError(res.status, parsed)
                    return reject(error)
                }
                return resolve(parsed)
            } catch (err) {
                return reject(errorsApi.internalServerError)
            }
        })
    }
}

export default AdminAPI
