import { ETruckType } from './enums'

export type JobHistory = {
    id: string
    originPoint: string
    originAddress: string
    destinationPoint: string
    destinationAddress: string
    distance: string
    duration: string
    truckType: ETruckType
    rate: string
    total: number
    loadNumber: string
    shipperName: string
    shipperAddress: string
    shipperPhone: string
    shipperEmail: string
    shipperChargeAmount: string
    startDate: Date
    endDate: Date
    mcNumber: number
    weight: string
    cargo: string
}

export interface JobHistoryCardProps extends JobHistory {
    onClick: (id: string) => void
    active: boolean
}
