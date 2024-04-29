import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../services/authService";

export const LoadingStatus = Object.freeze({
    Idle : 'idle',
    Pending : 'pending',
    Success : 'fulfilled',
    Failed : 'rejected'
});

export const userLogin = createAsyncThunk('auth/login', authService.login());
export const fetchUserInfos = createAsyncThunk('auth/infos', authService.fetchUserInfos());
export const updateUserInfos = createAsyncThunk('auth/update', authService.updateUserInfos());
                        
const token = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;
const initialState = {
    loading: 'idle',
    token,
    error: null,
    userInfos: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userToken');
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.loading = LoadingStatus.Pending;
                state.error = null;
            })
            .addCase(userLogin.fulfilled, (state, { payload }) => {
                state.loading = LoadingStatus.Success;
                state.token = payload.body.token;
                localStorage.setItem('userToken', state.token);
            })
            .addCase(userLogin.rejected, (state, {payload }) => {
                state.loading = LoadingStatus.Failed;
                state.error = payload.message || "Something went wrong during user login.";
            })
            .addCase(fetchUserInfos.pending, (state) => {
                state.loading = LoadingStatus.Pending;
                state.error = null;
            })
            .addCase(fetchUserInfos.fulfilled, (state, {payload}) => {
                state.userInfos = {firstName: payload.body.firstName, lastName: payload.body.lastName};
                state.loading = LoadingStatus.Success;
            })
            .addCase(fetchUserInfos.rejected, (state, {payload}) => {
                state.loading = LoadingStatus.Failed;
                state.error = payload.message || "Something went wrong during user infos fetch.";
            })
            .addCase(updateUserInfos.pending, (state) => {
                state.loading = LoadingStatus.Pending;
                state.error = null;
            })
            .addCase(updateUserInfos.fulfilled, (state, { payload }) => {
                state.userInfos = {firstName: payload.body.firstName, lastName: payload.body.lastName};
                state.loading = LoadingStatus.Success;
            })
            .addCase(updateUserInfos.rejected, (state, {payload}) => {
                state.loading = LoadingStatus.Failed;
                state.error = payload.message || "Something went wrong during user infos update.";
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;