import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';

interface Doctor {
    expertise: string;
    name: string;
    city: string;
}

interface DoctorState {
    doctorsData: Doctor[];
    error: string | null;
}

interface GetDoctorsListByCityPayload {
    city: string;
}

export const getDoctorsListByCity = createAsyncThunk<Doctor[], GetDoctorsListByCityPayload>("getDoctorsListByCity", async (data, { rejectWithValue }) => {
    try {
        const config = { headers: { "Content-Type": "application/json" } };
        const apiUrl = `https://cute-puce-barracuda-tutu.cyclic.app/city-doctorslist`;

        const response = await axios.post(apiUrl, data, config);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return rejectWithValue(error.response.data);
        } else {
            return rejectWithValue("An error occurred");
        }
    }
});

const doctorSlice = createSlice({
    name: "doctors",
    initialState: {
        doctorsData: [],
        error: null as string | null,
    } as DoctorState,
    reducers: {

        resetDoctorsData(state) {
            state.doctorsData = [];
        },


    },
    extraReducers: (builder) => {
        builder
            .addCase(getDoctorsListByCity.pending, (state) => {
                state.doctorsData = [];
                state.error = null;
            })
            .addCase(getDoctorsListByCity.fulfilled, (state, action: PayloadAction<Doctor[]>) => {
                state.doctorsData = action.payload;
                state.error = null;
            })
            .addCase(getDoctorsListByCity.rejected, (state, action) => {
                state.doctorsData = [];
                state.error = action.payload as string;
            });
    },
});

export default doctorSlice.reducer;
export const { resetDoctorsData} = doctorSlice.actions;
