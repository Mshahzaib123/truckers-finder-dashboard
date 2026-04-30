import { AppDispatch } from '../store'
import configs from '../config/enviroment'
import { serialize } from './helpers'
import { AuthToken, Creds } from '../types/api'

export const authRequest = async <T>(
    data: Creds
): Promise<T | null | undefined> => {
    return new Promise(async (resolve, reject) => {
        const res = await fetch(`${configs.authUrl}/oauth2/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: serialize({
                grant_type: 'password',
                username: data.email,
                password: data.password,
            }),
        })
        try {
            const parsed = await res.json()
            return res.ok ? resolve(parsed) : reject(parsed)
        } catch (err) {
            if (err instanceof Error) {
                return reject({
                    error: 'serverError',
                    error_description: err.message,
                })
            }
            return reject({
                error: 'unknownError',
                error_description:
                    'Unknown error. Please contact Open Tender support.',
            })
        }
    })
}

export const revokeRequest = async <T>(
    token: AuthToken
): Promise<T | null | undefined> => {
    return new Promise(async (resolve, reject) => {
        const res = await fetch(`${configs.authUrl}/oauth2/revoke`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: serialize({ token }),
        })
        try {
            const parsed = await res.json()
            return res.ok ? resolve(null) : reject(parsed)
        } catch (err) {
            if (err instanceof Error) {
                return reject({
                    error: 'serverError',
                    error_description: err.message,
                })
            }
            return reject({
                error: 'unknownError',
                error_description:
                    'Unknown error. Please contact Open Tender support.',
            })
        }
    })
}

export const refreshSession = () => {
    return async (_dispatch: AppDispatch) => {}

}
