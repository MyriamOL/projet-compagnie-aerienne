import { configureStore } from '@reduxjs/toolkit';
import searchSlice from '../slice/searchSlice';
import userSlice from '../slice/userSlice';

export default configureStore({
    reducer: {
        search: searchSlice,
        user: userSlice
    }
})