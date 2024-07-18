import { configureStore } from "@reduxjs/toolkit";
import Presonal_Expense from "../feature/finance"
import todo from "../feature/todo";
export const store = configureStore({
    reducer: {
        preosnalExpesekey: Presonal_Expense,
        todokey: todo
    }
})