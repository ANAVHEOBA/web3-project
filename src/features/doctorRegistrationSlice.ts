import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// export interface DoctorStepState {
//   value: number;
// }

const initialState: any = {
  doctorData: {
    personalInfo: {
      name: "",
      gender: "",
      dob: "",
      address: "",
      city: "",
      state: "",
      about: "",
      image: null,
    },
    documentData: {
      type: "none",
      documentNumber: "",
      file: "",
    },
    verification: {
      registrationNumber: "",
      specialization: "",
      file: "",
    },
    preference: {
      minCost: "",
      maxCost: "",
      callType: [],
      language: "",
      startDate: "",
      startTime: "",
      endTime: "",
      days: [],
    },
  },
};

export const doctorRegistrationSlice = createSlice({
  name: "doctorRegistration",
  initialState,
  reducers: {
    updatePersonalData: (state, action: PayloadAction<any>) => {
      console.log(action.payload);
      state.doctorData.personalInfo = action.payload;
    },

    updateDoctorImage: (state, action: PayloadAction<any>) => {
      console.log(action.payload);
      state.doctorData.personalInfo.image = action.payload
    },
  },
});

export const { updatePersonalData, updateDoctorImage } = doctorRegistrationSlice.actions;

export const doctorRegisterData = (state: any) => state.doctorRegistration;

export default doctorRegistrationSlice.reducer;
