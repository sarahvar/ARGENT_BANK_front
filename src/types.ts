export interface RootState {
    logged: {
        isLoggedIn: boolean,
        token: string, 
        firstName: string,
        lastName: string,
        isEditingName: boolean,
    }
}

export interface ApiResponse {
    token: string;
    firstName: string;
    lastName: string;
}