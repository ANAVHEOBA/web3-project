import { configureStore } from '@reduxjs/toolkit'
import doctorStepSlice from './features/doctorStepSlice'
import pharmacyStepSlice from './features/pharmacyStepSlice'

export const store = configureStore({
  reducer: {
    doctorStep: doctorStepSlice,
    pharmacyStep: pharmacyStepSlice
  },
  
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch