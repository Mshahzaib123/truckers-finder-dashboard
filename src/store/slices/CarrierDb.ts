import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    DbData: [] as MyData[], // Initialize with an empty array
    FilterData: [] as MyData[], // Initialize with an empty array
}

interface MyData {
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

export const carrierDbSlice = createSlice({
    name: 'carrierDb',
    initialState,
    reducers: {
        getCarrierDbData: (state) => {
            let dummyData: MyData[] = []
            for (let i = 0; i < 10; i++) {
                dummyData.push({
                    mcNumber: `MC${i + 10000}`,
                    usdot: `DOT${i + 90000}`,
                    legalName: `Company ${i + 1} Inc`,
                    dbaName: `DBA ${i + 1}`,
                    carrierOperation: 'LLC',
                    street: `${i + 100} Elm St`,
                    city: `City ${i + 1}`,
                    state: 'CA',
                    zip: `${i + 90000}`,
                    country: 'USA',
                    telephone: `(555) ${i + 100}-0000`,
                    emailAddress: `info${i + 1}@company${i + 1}.com`,
                    mcs150Date: `2022-08-${i + 10}`,
                    mcs150Mileage: `${i + 1000}`,
                    mcs150MileageYear: `20${i + 10}`,
                    approvalDate: `2023-09-${i + 1}`,
                    powerUnits: `${i + 5}`,
                    drivers: `${i + 2}`,
                    operationClassification: 'Transportation',
                    cargoCarried: 'General Freight',
                    inspection: `2023-02-${i + 20}`,
                    crashes: `${i + 1}`,
                })
            }
            dummyData.push({
                mcNumber: `MC${1 + 10000}`,
                usdot: `DOT${1 + 90000}`,
                legalName: `Company ${1 + 1} Inc`,
                dbaName: `DBA ${1 + 1}`,
                carrierOperation: 'Authorized For Hire',
                street: `${1 + 100} Elm St`,
                city: `City ${1 + 1}`,
                state: 'CA',
                zip: `${1 + 90000}`,
                country: 'USA',
                telephone: `(555) ${1 + 100}-0000`,
                emailAddress: `info${1 + 1}@company${1 + 1}.com`,
                mcs150Date: `2022-08-${1 + 10}`,
                mcs150Mileage: `${1 + 1000}`,
                mcs150MileageYear: `20${1 + 10}`,
                approvalDate: `2023-09-${1 + 1}`,
                powerUnits: `${1 + 5}`,
                drivers: `${1 + 2}`,
                operationClassification: 'Authorized For Hire',
                cargoCarried: 'General Freight',
                inspection: `2023-02-${1 + 20}`,
                crashes: `${1 + 1}`,
            })
            dummyData.push({
                mcNumber: `MC${1 + 10000}`,
                usdot: `DOT${1 + 90000}`,
                legalName: `Company ${1 + 1} 1nc`,
                dbaName: `DBA ${1 + 1}`,
                carrierOperation: 'LLC',
                street: `${1 + 100} Elm St`,
                city: `City ${1 + 1}`,
                state: 'CA',
                zip: `${1 + 90000}`,
                country: 'USA',
                telephone: `(555) ${1 + 100}-0000`,
                emailAddress: `info${1 + 1}@company${1 + 1}.com`,
                mcs150Date: `2022-08-${1 + 10}`,
                mcs150Mileage: `${1 + 1000}`,
                mcs150MileageYear: `20${1 + 10}`,
                approvalDate: `2023-09-${1 + 1}`,
                powerUnits: `${1 + 5}`,
                drivers: `${1 + 2}`,
                operationClassification: 'Transportation',
                cargoCarried: 'Household Goods',
                inspection: `2023-02-${1 + 20}`,
                crashes: `${1 + 1}`,
            })
            state.DbData = dummyData
            state.FilterData = dummyData
        },
        filterByDate: (state, action) => {
            state.FilterData = state.DbData.filter((row) => {
                console.log(row.approvalDate)

                return row.approvalDate === action.payload
            })

            console.log(state.FilterData)
        },
        filterByOperation: (state, action) => {
            console.log('act', action.payload)
            state.FilterData = state.DbData.filter((row) => {
                return row.operationClassification === action.payload
            })
        },
        filterByCargoCarried: (state, action) => {
            state.FilterData = state.DbData.filter((row) => {
                return row.cargoCarried === action.payload
            })
        },
        resetFilter: (state) => {
            state.FilterData = state.DbData
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    getCarrierDbData,
    filterByDate,
    filterByOperation,
    filterByCargoCarried,
} = carrierDbSlice.actions

export default carrierDbSlice.reducer
