import { createSlice } from '@reduxjs/toolkit';

export const searchSlice=createSlice({
    name: 'search',
    initialState: {
        aeroportDep: null,
        aeroportArr: null,
        iataDep: null,
        iataArr: null,
        jourDep: null
    },
    reducers: {
        setAeroportDep: (state, action) => {
            state.aeroportDep=(action.payload.val);
        },
        setAeroportArr: (state, action) => {
            state.aeroportArr=(action.payload.val);
        },
        setIataDep: (state, action) => {
            state.iataDep=(action.payload.val);
        },
        setIataArr: (state, action) => {
            state.iataArr=(action.payload.val);
        },
        setJourDep: (state, action) => {
            state.jourDep=(action.payload.val);
        }
    }
});

export const { setAeroportDep, setAeroportArr, setIataDep, setIataArr, setJourDep } = searchSlice.actions;

export default searchSlice.reducer;