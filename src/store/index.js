import { configureStore } from "@reduxjs/toolkit";
import { demoReduxReducer } from "./demoRedux.slice";
import { btShoeReduxReducer } from "./btShoeRedux.slice";
import { seatBookingReducer } from "./seatBooking.slice";

export const store = configureStore({
    //root reducer
    reducer: {
        seatBookingReducer,
    },
    //devTools: false,  // tắt không cho nhìn devTool ở trình duyệt
})