import { AxiosResponse } from 'axios'
export interface Creds {
    email: string
    password: string
}

export interface Oauth {
    service: 'truckersfinder'
    code: string
}

export type AuthToken = string

export interface TokenApiResponse {
    access_token: string
    expires_in: number
    refresh_token: string
    token_type: string
}

export type ErrorType = Record<string, unknown> | null

export interface AuthApiOptions {
    method: string
    headers: Record<string, string>
    body: string
}

export type TApiResponse<T = object> = Promise<AxiosResponse<T>>
