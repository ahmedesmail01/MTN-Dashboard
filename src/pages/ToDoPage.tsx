import { Grid } from "@chakra-ui/react";
import HeroToDo from "../components/HeroToDo";
import TodoCard from "../components/TodoCard";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { ITodo } from "../interfaces";

const ToDoPage = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  console.log(todos);
  //const dispatch = useDispatch();

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
