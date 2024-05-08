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

const token = sessionStorage.getItem('userToken') ? sessionStorage.getItem('userToken') : null;
const initialState = {
    loading: LoadingStatus.Idle,
    token,
    error: null,
    userInfos: null,
    editProfile: false // Ajoutez editProfile à l'état initial
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            sessionStorage.removeItem('userToken');
            state.loading = false;
            state.error = null;
        },
        // Ajoutez cette action pour mettre à jour l'état editProfile
        setEditProfile: (state, action) => {
            state.editProfile = action.payload;
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
                sessionStorage.setItem('userToken', state.token);
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

export const { logout, setEditProfile } = authSlice.actions;
export default authSlice.reducer;
