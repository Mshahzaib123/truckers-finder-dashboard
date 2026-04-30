export interface API {
	users: User[]
	carriers: Carrier[]
}

export interface Carrier {
	mcNumber: string
	usdot: string
	legalName: string
	dbaName: string
	carrierOperation: string
	street: string
	city: string
	state: string
	zip: string
	country: string
	telephone: string
	emailAddress: string
	mcs150Date: string
	mcs150Mileage: string
	mcs150MileageYear: string
	approvalDate: string
	powerUnits: string
	drivers: string
	operationClassification: string
	cargoCarried: string
	inspection: string
	crashes: string
}

export interface User {
	created: string
	email: string
	firstName: string
	id: number
	lastName: string
	phoneNumber: string
	invitationStatus: "pending" | "activated"
	role: "admin" | "sub-admin"
}
