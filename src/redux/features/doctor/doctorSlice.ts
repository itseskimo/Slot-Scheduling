import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';

//Response of Auth Actions
interface UserInfo {
    name: string;
    token: string;
    role: string
}

//Login
interface LoginInfo {
    username: string;
    password: string;
}

//Register
interface RegisterInfo extends LoginInfo {
    role: string;
}

//Physio Selected Dates
interface SelectedDate {
    day: string;
    date: string;
    slots: string[];
}


interface DoctorState {
    error: string | null;
    userInfo: UserInfo | null
    physioInfo: SelectedDate
    role: string
}



export const register = createAsyncThunk<UserInfo, RegisterInfo>("register", async (data, { rejectWithValue }) => {

    try {
        const config = { headers: { "Content-Type": "application/json" } };
        const apiUrl = `https://cute-puce-barracuda-tutu.cyclic.app/register`;

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


export const login = createAsyncThunk<UserInfo, LoginInfo>("login", async (data, { rejectWithValue }) => {

    try {
        const config = { headers: { "Content-Type": "application/json" } };
        const apiUrl = `https://cute-puce-barracuda-tutu.cyclic.app/login`;

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


export const addPhysioCalendar = createAsyncThunk<String, SelectedDate>("addPhysioCalendar", async (data, { rejectWithValue }) => {

    try {
        const config = { headers: { "Content-Type": "application/json" } };
        const apiUrl = `https://cute-puce-barracuda-tutu.cyclic.app/physio-calendar`;

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
        userInfo: null as UserInfo | null,
        role: '',
        physioInfo: null as SelectedDate | null,
        error: null as string | null,
    } as DoctorState,

    reducers: {

        setRole(state, action) {
            state.role = action.payload;
        },
        setPhysioSlots(state, action) {
            state.physioInfo = action.payload;
        },



    },
    extraReducers: (builder) => {
        builder

            .addCase(register.pending, (state) => {
                state.userInfo = null;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action: PayloadAction<UserInfo>) => {
                state.userInfo = action.payload;
                state.error = null;
            })
            .addCase(register.rejected, (state, action) => {
                state.userInfo = null;
                state.error = action.payload as string;
            })


            .addCase(login.pending, (state) => {
                state.userInfo = null;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action: PayloadAction<UserInfo>) => {
                state.userInfo = action.payload;
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.userInfo = null;
                state.error = action.payload as string;
            })
            // .addCase(addPhysioCalendar.pending, (state) => {
            //     state.physioInfo = null;
            //     state.error = null;
            // })
            // .addCase(addPhysioCalendar.fulfilled, (state, action: PayloadAction<String>) => {
            //     state.physioInfo = action.payload;
            //     state.error = null;
            // })
            // .addCase(addPhysioCalendar.rejected, (state, action) => {
            //     state.physioInfo = null;
            //     state.error = action.payload as string;
            // })

    },
});

export default doctorSlice.reducer;
export const { setRole } = doctorSlice.actions;
