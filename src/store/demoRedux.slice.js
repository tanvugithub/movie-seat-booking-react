import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    number: 10,
    age: 30,
    fontSize: 16,
}

const demoReduxSlice = createSlice({
    name: 'demo-redux',
    initialState,
    reducers: {
        // tạo action
        increaseNumber: (state, { payload }) => {
            //state: giá trị initial hiện tại
            //action.payload: giá trị dispatch lên

            state.number = payload + 1;
        },
        decreaseNumber: (state, { payload }) => {
            state.number = payload - 1;
        },

        increaseFontsize: (state, { payload }) => {
            state.fontSize = state.fontSize + payload;
        },
        decreaseFontsize: (state, { payload }) => {
            state.fontSize = state.fontSize - payload;
        }
    }
})

export const { reducer: demoReduxReducer, actions: demoReduxActions } = demoReduxSlice
