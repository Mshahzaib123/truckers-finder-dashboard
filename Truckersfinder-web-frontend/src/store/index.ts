import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import rootReducer from './slices'

const appReducer = (state: any, action: any) => {
    return rootReducer(state, action)
}

const preloadedState = {}

export const store = configureStore({
    reducer: appReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }),
    ...(preloadedState ? { preloadedState } : {}),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
export type AppDispatch = typeof store.dispatch
