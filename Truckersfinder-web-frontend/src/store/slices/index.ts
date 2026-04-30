import { combineReducers } from '@reduxjs/toolkit'
import auth from './auth'
import CarrierDb from './CarrierDb'
import profile from './profile.slice'

const rootReducer = combineReducers({
    auth,
    CarrierDb,
    profile,
})

export default rootReducer
