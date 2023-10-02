import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'Learn AWS', completed: true, priority: "Medium" },
        { id: 2, name: 'Learn Azure', completed: false, priority: "High" },
        { id: 3, name: 'Learn NodeJS', completed: false, priority: "Low" }
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        togglePriority: (state, action) => {
            const item = state.find(f => f.id === action.payload);
            if (item) {
                item.completed = !item.completed;
            }
        }
    }
});