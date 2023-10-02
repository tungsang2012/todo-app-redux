import { configureStore } from '@reduxjs/toolkit';
import todoListSlice from '../components/TodoList/todoListSlice';
import filtersSlice from '../components/Filters/filtersSlice';

export default new configureStore({
    reducer: {
        todoList: todoListSlice.reducer,
        filters: filtersSlice.reducer
    }
});