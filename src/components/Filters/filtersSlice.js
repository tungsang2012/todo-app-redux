import { createSlice } from "@reduxjs/toolkit";

export default new createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priorities: []
    },
    reducers: {
        filterSearchTodo: (state, action) => {
            state.search = action.payload;
        },
        statusFilterChange: (state, action) => {
            state.status = action.payload;
        },
        prioritiesFilterChange: (state, action) => {
            state.priorities = action.payload;
        }
    }
});