import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../redux/authSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage, 
    version: 1
}


const persistedReducer = persistReducer(persistConfig, authReducer)

export default configureStore({
    reducer: {
       auth: persistedReducer 
    }
})
