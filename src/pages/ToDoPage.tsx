import { Grid } from "@chakra-ui/react";
import HeroToDo from "../components/HeroToDo";
import TodoCard from "../components/TodoCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { ITodo } from "../interfaces";
import { useEffect } from "react";
import { addTodo } from "../app/features/TodosSlice";

const ToDoPage = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const parsedTodos: ITodo[] = JSON.parse(storedTodos);
      parsedTodos.forEach((todo) => dispatch(addTodo(todo)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <HeroToDo />
      <Grid
        margin={30}
        templateColumns={"repeat(auto-fill, minmax(300px, 1fr))"}
        gap={6}
      >
        {todos.map((todo: ITodo) => (
          <TodoCard
            key={todo.id}
            id={todo.id}
            title={todo.title}
            text={todo.text}
            complete={todo.completed}
          />
        ))}
      </Grid>
    </>
  );
};

export default ToDoPage;
