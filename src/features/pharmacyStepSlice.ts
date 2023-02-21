import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PharmacyStepState {
  value: number
}

const initialState: PharmacyStepState = {
  value: 0,
}

export const pharmacyStepSlice = createSlice({
  name: 'pharmacyStep',
  initialState,
  reducers: {
    
    pharmacyUpdateStep: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})

export const { pharmacyUpdateStep } = pharmacyStepSlice.actions

export const  activePharmacyStep = (state:any) => state.pharmacyStep;

export default pharmacyStepSlice.reducer