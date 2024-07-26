import { configureStore } from '@reduxjs/toolkit';
import phraseReducer from '../reducers/phraseReducer';

const store = configureStore({
    reducer: {
        phrase: phraseReducer,
    },
});

/**
 * Type representing the root state of the store.
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;




export default store;
