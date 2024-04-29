import axios from "axios"

const login = () => async ({ email, password }, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const { data } = await axios.post(
            `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_LOGIN_ENDPOINT}`,
            { email, password },
            config
            )
        return data
    } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }

const fetchUserInfos = () => async (token, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            }
            const { data } = await axios.post(
                `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_PROFILE_ENDPOINT}`,
                { token },
                config
                )
                return data
            } catch (error) {
                if (error.response && error.response.data.message) {
                    return rejectWithValue(error.response.data.message)
                } else {
                    return rejectWithValue(error.message)
                }
            }
        }

const updateUserInfos = () => async ({token, firstName, lastName }, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        }
        const { data } = await axios.put(
            `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_PROFILE_ENDPOINT}`,
            { firstName, lastName },
            config
            )
            return data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }

export const authService = {
    login,
    fetchUserInfos,
    updateUserInfos
}

