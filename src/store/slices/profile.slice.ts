import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { TUser } from '../../types/app.types'
import { profileAPi } from '../../api/profile.api'
import { usersList } from '../../utils'

const initialState = {
    users: usersList as TUser[],
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
    },
})

export const getUsers = createAsyncThunk('get-users', async () => {
    const { data } = await profileAPi.getUsers()
    return data
})

export default profileSlice.reducer
