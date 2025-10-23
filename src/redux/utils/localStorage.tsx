import type { Todo } from "@/lib/types";

const STORAGE_KEY = "todos_app";

export function saveTodosToStorage(todos: Todo[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    console.log("Failed to save todos to localStorage: ", error);
  }
}

export function loadTodosFromStorage(): Todo[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    return JSON.parse(data) as Todo[];
  } catch (error) {
    console.log("Failed to load todos from localStorage: ", error);
    return [];
  }
}
