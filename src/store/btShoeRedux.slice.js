import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    shoeList: [],
    carts: [],
    isLoading: false,
}

//Tạo action bất đồng bộ (action thunk) -> call API
export const getShoeListThunk = createAsyncThunk('bt-shoe-redux/get-shoeList', async (payload, { rejectWithValue }) => {
    try {
        // gọi API
        const res = await axios.get(
            "https://apistore.cybersoft.edu.vn/api/Product"
        );
        return res.data.content;  // auto dispatch lên store
    } catch (err) {
        rejectWithValue(err);
    }
})

const shoeSlice = createSlice({
    name: 'bt-shoe-redux',
    initialState,
    //Action sync
    reducers: {
        setShoeList: (state, { payload }) => {  // {payload, type} = action
            state.shoeList = payload;
        },

        addCarts: (state, { payload }) => {

            const index = state.carts.findIndex((item) => item.id === payload.id);

            if (index !== -1) {
                state.carts[index].cartQuantity += 1;
                return;
            }

            state.carts = [...state.carts, payload];
        },

        setCartQuantity: (state, { payload }) => {
            const index = state.carts.findIndex((item) => item.id === payload.id);

            if (index !== -1) {
                state.carts[index].cartQuantity = state.carts[index].cartQuantity + payload.quantity || 1;
            }
        },

        deleteCarts: (state, { payload }) => {
            state.carts = state.carts.filter((item) => item.id !== payload.id);
        }
    },

    // Dùng để xử lý action bất đồng bộ
    extraReducers: (builder) => {
        //getShoeListThunk
        // Case pending => Luôn luôn đc thực thi khi getShoeListThunk đc dispatch
        // thường dùng để xử lý loading
        builder.addCase(getShoeListThunk.pending, (state, { payload }) => {
            state.isLoading = true;
        })
        // Xử lý case thành công
        // payload: Giá trị return về ở action thunk tương ứng
        builder.addCase(getShoeListThunk.fulfilled, (state, { payload }) => {
            state.shoeList = payload;
            state.isLoading = false;
        })
        // Xử lý case thất bại
        builder.addCase(getShoeListThunk.rejected, (state, { payload }) => {
            state.isLoading = false;
        })

        // Có thể có nhiều action thunk
        // thêm giống như đoạn trên

    },
})

export const { reducer: btShoeReduxReducer, actions: btShoeReduxActions } = shoeSlice;

// Note: Khi cần call nhiều API action thunk ???
// Có phải tách ra nhiều file slice không, gọp chung thành 1 slice được không?
// vd: shoeListThunk, hotDealShoeListThunk, blackFridayShoeListThunk, ...


// Nếu phân giải reducer ra tiếp:
// {shoeList, carts} = shoeSlice.reducer;


// or export:
// export {setShoeList, addCarts, setCartQuantity, deleteCarts} = shoeSlice.actions;

// ở trang cần dispatch:
// import {addCarts} from "../store/btShoeRedux.slice";
// dispatch(addCarts(...shoe, cartQuantity: 1))