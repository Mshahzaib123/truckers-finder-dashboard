import { TProfileAPi } from '../types/api/profile.api.types'
import instance from './instance'

export const profileAPi: TProfileAPi = {
    getUsers: () => instance.get('/users'),
}
