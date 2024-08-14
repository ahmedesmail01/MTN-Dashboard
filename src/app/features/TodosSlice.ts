import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../interfaces";

interface TodosState {
  todos: ITodo[];
}

const initialState: TodosState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo: ITodo = {
        id: Date.now(),
        title: action.payload,
        text: action.payload,
        completed: false,
      };
      if (newTodo.title) {
        state.todos.push(newTodo);
      }
      return;
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
