import { EInvitationStatus, EUserRoles } from './enums'

export type TUser = {
    created: string
    email: string
    firstName: string
    id: number
    lastName: string
    phoneNumber: string
    invitationStatus: EInvitationStatus
    role: EUserRoles
}
