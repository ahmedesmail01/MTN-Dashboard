import "./App.css";
//import { addTodo } from "./app/features/TodosSlice";
import Layout from "./layout/Layout";
//import { useEffect } from "react";
//import { useDispatch } from "react-redux";

function App() {
  /*  const dispatch = useDispatch();

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      parsedTodos.forEach((todo: { title: string; text: string }) =>
        dispatch(addTodo(todo))
      );
    }
  }, [dispatch]); */
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
