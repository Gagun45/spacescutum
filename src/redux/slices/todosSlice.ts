import type { ExternalTodo, Todo } from "@/lib/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit/react";
import { createAsyncThunk } from "@reduxjs/toolkit/react";
import { v4 as uuid } from "uuid";
import { loadTodosFromStorage } from "../utils/localStorage";

type TodosState = {
  todos: Todo[];
  loading: boolean;
  error?: string | null;
};

const initialState: TodosState = {
  todos: loadTodosFromStorage(),
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
    addTodo(state, action: PayloadAction<{ title: string }>) {
      const { title } = action.payload;
      const newTodo: Todo = {
        id: uuid(),
        title,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      state.todos = [...state.todos, newTodo];
    },
    deleteTodo(state, action: PayloadAction<{ todoId: string }>) {
      state.todos = state.todos.filter((t) => t.id !== action.payload.todoId);
    },
    clearTodos(state) {
      state.todos = [];
    },
    toggleTodoCompleted(state, action: PayloadAction<{ todoId: string }>) {
      const todoId = action.payload.todoId;
      state.todos = state.todos.map((t) =>
        t.id === todoId ? { ...t, completed: !t.completed } : t
      );
    },
    editTodoTitle(
      state,
      action: PayloadAction<{ todoId: string; newTitle: string }>
    ) {
      const { newTitle, todoId } = action.payload;
      state.todos = state.todos.map((t) =>
        t.id === todoId ? { ...t, title: newTitle } : t
      );
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

export const {
  addTodo,
  deleteTodo,
  clearTodos,
  toggleTodoCompleted,
  editTodoTitle,
} = todosSlice.actions;
export default todosSlice.reducer;
