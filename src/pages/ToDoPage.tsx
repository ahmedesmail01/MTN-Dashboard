import { Grid } from "@chakra-ui/react";
import HeroToDo from "../components/todos/HeroToDo";
import TodoCard from "../components/todos/TodoCard";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { ITodo } from "../interfaces";
import { memo, useEffect } from "react";

const ToDoPage = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <HeroToDo />
      <Grid
        marginTop={0}
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

export default memo(ToDoPage);
