import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/authSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
    blacklist: ['loading', 'error'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
    reducer: {
        auth: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }),
});

// Créez une fonction pour arrêter la persistance après un délai spécifié
const stopPersistAfterDelay = (delay) => {
    setTimeout(() => {
        persistStore(store).purge(); // Arrêtez la persistance des données
    }, delay);
};

// Appelez la fonction pour arrêter la persistance après 24 heures
stopPersistAfterDelay(86400000);

export default store;
export const persistor = persistStore(store);

