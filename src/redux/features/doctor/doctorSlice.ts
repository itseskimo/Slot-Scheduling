import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';

interface Doctor {
    expertise: string;
    name: string;
    city: string;
    _id:string
}

interface User {
    age: string;
    name: string;
    city: string;
    company: string;
    phone: string;
}

interface Review {
    quote: string;
    name: string;
    designation: string;
    rating: string;
    image: string;
    _id: string
}

interface DoctorState {
    doctorsData: Doctor[];
    reviewsData: Review[];
    isPopUpVisible: boolean;
    userInfo: User | null;
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

export const getReviews = createAsyncThunk("getReviews", async (_, { rejectWithValue }) => {
    try {
        const config = { headers: { "Content-Type": "application/json" } };

        const apiUrl = `https://cute-puce-barracuda-tutu.cyclic.app/reviews-list`;
        const response = await axios.get(apiUrl, config);

        return response?.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

const doctorSlice = createSlice({
    name: "doctors",
    initialState: {
        doctorsData: [],
        reviewsData: [],
        isPopUpVisible: false,
        userInfo: null,
        error: null as string | null,
    } as DoctorState,
    reducers: {

        resetDoctorsData(state) {
            state.doctorsData = [];
        },

        setPopUpVisibility: (state, action: PayloadAction<boolean>) => {
            state.isPopUpVisible = action.payload;
        },
        setUserInfo: (state, action: PayloadAction<User>) => {
            state.userInfo = action.payload;
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
            })
            .addCase(getReviews.pending, (state) => {
                state.reviewsData = [];
                state.error = null;
            })
            .addCase(getReviews.fulfilled, (state, action) => {
                state.reviewsData = action.payload;
                state.error = null;
            })
            .addCase(getReviews.rejected, (state, action) => {
                state.reviewsData = [];
                state.error = action.payload as string;
            });
    },
});

export default doctorSlice.reducer;
export const { resetDoctorsData, setPopUpVisibility, setUserInfo } = doctorSlice.actions;
