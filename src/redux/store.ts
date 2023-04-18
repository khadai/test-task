import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slice';

const store = configureStore({
    reducer: {
        game: counterReducer
    }
});

export default store;
