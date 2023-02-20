import { configureStore } from '@reduxjs/toolkit'
import doctorStepSlice from './features/doctorStepSlice'
import doctorRegistrationSlice from './features/doctorRegistrationSlice'


export const store = configureStore({
  reducer: {
    doctorStep: doctorStepSlice,
    doctorRegistration: doctorRegistrationSlice,
  },
  
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch