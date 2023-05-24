import { configureStore } from '@reduxjs/toolkit';
import searchSlice from '../slice/searchSlice';

export default configureStore({
    reducer: {
        search: searchSlice
    }
})