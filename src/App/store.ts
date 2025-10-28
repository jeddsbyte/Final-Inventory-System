import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/es/storage';
import {persistReducer, persistStore} from 'redux-persist';
import authReducer from '../Features/auth/authSlice';
import { userApi } from '../Features/api/userAPI';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user', 'token', 'isAuthenticated','userType'],
};
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        [userApi.reducerPath]: userApi.reducer,
        
    },
    
    
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false, // To avoid serialization errors with redux-persist
    }).concat(userApi.middleware),

       
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);