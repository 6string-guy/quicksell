import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    dataSelected: [],
    user: null, 
    tickets: [],
    users: [],
    message: null, 
};

export const Reducer = createReducer(initialState, {
    dataRequest: (state) => {
        state.loading = true;
    },
    dataSuccess: (state, action) => {
        state.loading = false;
        state.tickets = action.payload.tickets;
        state.users = action.payload.users;
    },
    dataFailure: (state) => {
        state.loading = false;
        state.tickets = [];
        state.users = [];
    },
    dataSelectRequest: (state) => {
        state.loading = true;
        state.dataSelected = [];
        state.user = null; 
        state.message = null;
    },
    dataSelectSuccess: (state, action) => {
        state.loading = false;
        state.dataSelected = action.payload.dataSelected;
        state.user = action.payload.user;
        state.message = null;
    },
    dataSelectFailure: (state, action) => {
        state.loading = false;
        state.dataSelected = [];
        state.user = null;
        state.message = action.payload.message;
    },
});
