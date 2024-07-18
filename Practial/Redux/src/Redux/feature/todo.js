import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "Todo",
    initialState: { TodoItems: [] },
    reducers: {
        addItem: (state, action) => {
            state.TodoItems.push(action.payload)
        },
        deleteItem: (state, action) => {
            state.TodoItems = state.TodoItems.filter((_, i) => i != action.payload)
        },
        editItem: (state, action) => {
            const { edit, input } = action.payload
            state.TodoItems[edit] = input
        },
    }
})
export default todoSlice.reducer
export const { addItem, deleteItem, editItem } = todoSlice.actions