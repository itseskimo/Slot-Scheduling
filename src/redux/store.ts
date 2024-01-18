import { configureStore } from "@reduxjs/toolkit";
import doctorSlice from "./features/doctor/doctorSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        doctor: doctorSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
