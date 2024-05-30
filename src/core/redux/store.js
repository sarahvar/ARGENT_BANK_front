import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/authSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
    timeout: 20 * 60 * 1000, // 20 minutes en millisecondes
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
    reducer: {
        auth: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
                ignoredPaths: ['auth.register'],
            },
        }),
});

export const persistor = persistStore(store);
export default store;
