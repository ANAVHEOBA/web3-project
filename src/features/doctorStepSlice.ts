import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface DoctorStepState {
  value: number
}

const initialState: DoctorStepState = {
  value: 0,
}

export const doctorStepSlice = createSlice({
  name: 'doctorStep',
  initialState,
  reducers: {
    
    updateStep: (state, action: PayloadAction<number>) => {  
      state.value = action.payload
    },
  },
})

export const { updateStep } = doctorStepSlice.actions

export const  activeDoctorStep = (state:any) => state.doctorStep;

export default doctorStepSlice.reducer