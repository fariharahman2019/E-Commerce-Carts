import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { privatePost } from "../utilities/apiCaller";




const initialState = {
    buy: [],
    isLoading: false,
    isError: false,
    error: ''
}

export const createBuy = createAsyncThunk(
    'buy/createBuy', async ({ data,userToken}, { rejectWithValue }) => {

        try {
            const buy = await privatePost('/create/buy',userToken, data);
            return buy;
        } catch (err) {
            return rejectWithValue(err);
        }


    });

const createBuySlice = createSlice({
    name: 'buy',
    initialState,
    extraReducers: (builder) => {

        builder.addCase(createBuy.pending, (state, action) => {
            state.isLoading = true;
            state.isError = true
        });
        builder.addCase(createBuy.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.buy.push(action.payload);
        });
        builder.addCase(createBuy.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        });
    }
});

export default createBuySlice.reducer; 