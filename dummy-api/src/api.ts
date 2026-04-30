import { API, Carrier, User } from "./models/models"

import _ from "lodash"
import { faker } from "@faker-js/faker"

const dataAmount: number = 100

function getUsers(): User[] {
	const firstName = faker.person.firstName()
	const lastName = faker.person.lastName()
	const email = faker.internet.email({ firstName, lastName })

	const users: User[] = _.times(dataAmount, (n) => {
		return {
			created: faker.date.past().toString(),
			email,
			firstName,
			lastName,
			id: (n = 1),
			phoneNumber: faker.phone.number(),
			invitationStatus: faker.helpers.arrayElement([
				"pending",
				"activated",
			]),
			role: faker.helpers.arrayElement(["admin", "sub-admin"]),
		}
	})

	return users
}

function getCarriers(): Carrier[] {
	return _.times(dataAmount, (i) => {
		return {
			mcNumber: faker.helpers.fromRegExp("MC[1-5]{5}"),
			usdot: faker.helpers.fromRegExp("DOT[1-5]{5}"),
			legalName: faker.company.name(),
			dbaName: `DBA ${i + 1}`,
			carrierOperation: "LLC",
			street: faker.location.streetAddress(false),
			city: faker.location.city(),
			state: faker.location.state(),
			zip: faker.location.zipCode("#####"),
			country: "USA",
			telephone: faker.phone.number(),
			emailAddress: faker.internet.email(),
			mcs150Date: `2022-08-${i + 10}`,
			mcs150Mileage: `${i + 1000}`,
			mcs150MileageYear: `20${i + 10}`,
			approvalDate: `2023-09-${i + 1}`,
			powerUnits: `${i + 5}`,
			drivers: `${i + 2}`,
			operationClassification: "Transportation",
			cargoCarried: "General Freight",
			inspection: `2023-02-${i + 20}`,
			crashes: `${i + 1}`,
		}
	})
}

export const api: API = {
	users: getUsers(),
	carriers: getCarriers(),
}
