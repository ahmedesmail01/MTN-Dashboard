import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import TodosSlice from "./features/TodosSlice";
import weatherReducer from "./features/weatherSlice";
import postsReducer from "./features/postsSlice";

// Import your reducers here
// import userReducer from './features/user/userSlice'
// import productReducer from './features/product/productSlice'

export const store = configureStore({
  reducer: {
    todos: TodosSlice,
    weather: weatherReducer,
    posts: postsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
