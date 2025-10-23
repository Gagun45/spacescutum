import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../redux/slices/todosSlice";
import uiReducer from "../redux/slices/uiSlice";
import { saveTodosToStorage } from "./utils/localStorage";
import type { Todo } from "@/lib/types";

export const store = configureStore({
  reducer: { todos: todosReducer, ui: uiReducer },
});

let prevTodos: Todo[] = [];

store.subscribe(() => {
  const todos = store.getState().todos.todos;
  if (prevTodos !== todos) {
    saveTodosToStorage(todos);
    prevTodos = todos;
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
