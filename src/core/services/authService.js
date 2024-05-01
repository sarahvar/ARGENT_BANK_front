const login = () => async ({ email, password }, { rejectWithValue }) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        };

        const response = await fetch(
            `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_LOGIN_ENDPOINT}`,
            requestOptions
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to log in');
        }

        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
};

const fetchUserInfos = () => async (token, { rejectWithValue }) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ token }),
        };

        const response = await fetch(
            `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_PROFILE_ENDPOINT}`,
            requestOptions
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch user information');
        }

        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
};

const updateUserInfos = () => async ({ token, firstName, lastName }, { rejectWithValue }) => {
    try {
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ firstName, lastName }),
        };

        const response = await fetch(
            `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_PROFILE_ENDPOINT}`,
            requestOptions
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to update user information');
        }

        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
};

export const authService = {
    login,
    fetchUserInfos,
    updateUserInfos,
};
