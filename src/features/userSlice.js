import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../utilities/apiCaller";


// export const signInAsync = createAsyncThunk();


export const resetPasswordAsync = createAsyncThunk(
    "SignIn/forgotpassword", 
    async (userData,{ rejectWithValue }) => {
        console.log("hello hi bye bye", userData);

        try{
        const response = await userApi.resetPassword(userData);
        return response.data;
        } catch (err) {
            let responseObj = {
                status_code: err.response.status,
                message : err.response.data.message
            }

            return rejectWithValue(responseObj)
        }
}
);

// const initialState = {
//     user: {},
//     status: "idle",
//     error: null,
// }

export const userSlice=createSlice({
    name:"user",
    initialState:{
        user:null
    },
    reducers:{
        signin: (state,action)=>{
            state.user=action.payload;

        },
    },
    extraReducers: {
        [resetPasswordAsync.pending]: (state, action) => {
            state.status = "loading";
        },
        [resetPasswordAsync.fulfilled]: (state, action) => {
            state.status = "fulfilled";
            state.user = action.payload;
            state.error = null
        }
        ,
        [resetPasswordAsync.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.payload;
            state.user = null
        }

    }
});

export const {signin}=userSlice.actions;
export const selectUser=(state)=>state.user.user;
export default userSlice.reducer;