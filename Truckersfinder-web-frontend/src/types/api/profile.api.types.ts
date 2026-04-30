import { TApiResponse } from '.'
import { TUser } from '../app.types'

export type TProfileAPi = {
    getUsers: () => TApiResponse<TUser[]>
}
