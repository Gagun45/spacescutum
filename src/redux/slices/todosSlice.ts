import type { ExternalTodo, NewTodo, Todo, TodosState } from "@/lib/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit/react";
import { createAsyncThunk } from "@reduxjs/toolkit/react";
import { v4 as uuid } from "uuid";

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: null,
};

const apiUrl = "https://jsonplaceholder.typicode.com/todos?_limit=10";

export const fetchTodosFromApi = createAsyncThunk(
  "todos/fetchFromApi",
  async () => {
    const res = await fetch(apiUrl);
    const data: ExternalTodo[] = await res.json();
    const todos: Todo[] = data.map((t) => ({
      id: uuid(),
      title: t.title,
      completed: t.completed,
      createdAt: new Date().toISOString(),
    }));
    return todos;
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<NewTodo>) {
      const newTodo: Todo = {
        id: uuid(),
        title: action.payload.title,
        completed: action.payload.completed,
        createdAt: new Date().toISOString(),
      };
      state.todos = [newTodo, ...state.todos];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodosFromApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchTodosFromApi.fulfilled,
        (state, action: PayloadAction<Todo[]>) => {
          state.loading = false;
          state.error = null;
          state.todos = action.payload;
        }
      )
      .addCase(fetchTodosFromApi.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch todos";
      });
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
