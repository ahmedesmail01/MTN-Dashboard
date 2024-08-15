import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../interfaces";

interface TodosState {
  todos: ITodo[];
}

// Load todos from local storage or initialize with an empty array
const storedTodos = localStorage.getItem("todos");
const initialState: TodosState = {
  todos: storedTodos ? JSON.parse(storedTodos) : [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Partial<ITodo>>) => {
      const newTodo: ITodo = {
        id: action.payload.id || Date.now(),
        title: action.payload.title || "",
        text: action.payload.text || "",
        completed: action.payload.completed || false,
      };
      state.todos.push(newTodo);
    },
    toggleTodoComplete: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodoComplete, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
