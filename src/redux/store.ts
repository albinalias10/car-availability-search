import { configureStore } from '@reduxjs/toolkit';
import { carReducer } from './reducer';

const store = configureStore({
    reducer: carReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;