import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { LOCAl_STORAGE_KEYS } from "../constants/localStorageKeys";

const initialState = {
    fullName: '',
    selectedSeats: localStorage.getItem(LOCAl_STORAGE_KEYS.selectedSeats)
        ? JSON.parse(localStorage.getItem(LOCAl_STORAGE_KEYS.selectedSeats))
        : [],
    isLoading: false,
}

const seatBookingSlice = createSlice({
    name: 'seat-booking-redux',
    initialState,
    //Action sync
    reducers: {
        setSelectedSeats: (state, { payload }) => {
            const index = state.selectedSeats.findIndex(
                (selectedSeat) => selectedSeat.soGhe === payload.soGhe
            );

            if (index === -1) {
                state.selectedSeats = [...state.selectedSeats, payload];

            } else {
                state.selectedSeats = state.selectedSeats.filter(
                    (selectedSeat) => selectedSeat.soGhe !== payload.soGhe
                );
            }

            localStorage.setItem(
                LOCAl_STORAGE_KEYS.selectedSeats,
                JSON.stringify(state.selectedSeats)
            );

        },
        deleteSelectedSeats: (state, { payload }) => {
            state.selectedSeats = state.selectedSeats.filter(
                (selectedSeat) => selectedSeat.soGhe !== payload.soGhe
            );
            localStorage.setItem(
                LOCAl_STORAGE_KEYS.selectedSeats,
                JSON.stringify(state.selectedSeats)
            );
        },
        setFullName: (state, { payload }) => {
            state.fullName = payload;
        },

    },

    // Dùng để xử lý action bất đồng bộ
    extraReducers: (builder) => { },
})

export const { reducer: seatBookingReducer, actions: seatBookingActions } = seatBookingSlice;