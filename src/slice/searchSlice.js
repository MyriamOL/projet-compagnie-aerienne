import { createSlice } from '@reduxjs/toolkit';

export const searchSlice=createSlice({
    name: 'search',
    initialState: {
        aeroportDep: null,
        aeroportArr: null,
        heureDep: null
    },
    reducers: {
        setAeroportDep: (state, action) => {
            state.aeroportDep=(action.payload.val);
        },
        setAeroportArr: (state, action) => {
            state.aeroportArr=(action.payload.val);
        },
        setHeureDep: (state, action) => {
            state.heureDep=(action.payload.val);
        }
    }
});

export const { setAeroportDep, setAeroportArr, setHeureDep } = searchSlice.actions;

export default searchSlice.reducer;