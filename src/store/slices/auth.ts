import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RequestStatus } from '../../utils'
import { AuthToken, Creds, ErrorType, TokenApiResponse } from '../../types/api'
import { authRequest, revokeRequest } from '../../utils/authAPI'
import { RootState } from '../index'

export interface AuthState {
    token: AuthToken | null
    loading: RequestStatus
    error: Record<string, unknown> | null
}

const initialState: AuthState = {
    token: null,
    loading: RequestStatus.Idle,
    error: null,
}

export const authToken = createAsyncThunk<
    TokenApiResponse,
    Creds,
    { rejectValue: ErrorType }
>('authToken', async (data, thunkApi) => {
    try {
        return (await authRequest(data)) as TokenApiResponse
    } catch (err) {
        return thunkApi.rejectWithValue(err as ErrorType)
    }
})

export const revokeToken = createAsyncThunk<
    null,
    void,
    { state: RootState; rejectValue: ErrorType }
>('revokeToken', async (_, thunkApi) => {
    try {
        const token = thunkApi.getState().auth.token as AuthToken
        const resp = (await revokeRequest(token)) as null
        //reset user state from the slice
        return resp
    } catch (err) {
        return thunkApi.rejectWithValue(err as ErrorType)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // authToken
        builder.addCase(authToken.pending, (state) => {
            state.loading = RequestStatus.Pending
        })
        builder.addCase(authToken.fulfilled, (state, { payload }) => {
            state.token = payload.access_token
            state.loading = RequestStatus.Idle
            state.error = null
        })
        builder.addCase(authToken.rejected, (state, { payload }) => {
            state.loading = RequestStatus.Idle
            state.error = payload || null
        })
        // revokeToken
        builder.addCase(revokeToken.pending, (state) => {
            state.loading = RequestStatus.Pending
        })
        builder.addCase(revokeToken.fulfilled, (state, { payload }) => {
            state.token = null
            state.loading = RequestStatus.Idle
            state.error = null
        })
        builder.addCase(revokeToken.rejected, (state, { payload }) => {
            state.loading = RequestStatus.Idle
            state.error = payload || null
        })
    },
})
export const selectAuth = (state: RootState) => state.auth
export const selectToken = (state: RootState) => state.auth.token

export default authSlice.reducer
