import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { RootState } from "../app/store"; // Adjust this import path as needed
import ToDoPage from "../pages/ToDoPage";
import { toggleTodoComplete, deleteTodo } from "../app/features/TodosSlice";

// Mock the redux store
const mockStore = configureStore<RootState>([]);

// Mock the HeroToDo component
jest.mock("../components/todos/HeroToDo", () => {
  return function DummyHeroToDo() {
    return <div data-testid="hero-todo">Hero Todo Component</div>;
  };
});

describe("ToDoPage Component", () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      todos: {
        todos: [
          {
            id: 1,
            title: "Test Todo 1",
            text: "Test text 1",
            completed: false,
          },
          { id: 2, title: "Test Todo 2", text: "Test text 2", completed: true },
        ],
      },
    } as RootState);

    store.dispatch = jest.fn();
  });

  it("renders the ToDoPage component", () => {
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <ToDoPage />
      </Provider>
    );

    expect(getByTestId("hero-todo")).toBeInTheDocument();
    expect(getByText("Test Todo 1")).toBeInTheDocument();
    expect(getByText("Test Todo 2")).toBeInTheDocument();
  });

  it("renders the correct number of TodoCard components", () => {
    const { getAllByText } = render(
      <Provider store={store}>
        <ToDoPage />
      </Provider>
    );

    const todoCards = getAllByText(/Test Todo/);
    expect(todoCards).toHaveLength(2);
  });

  it('dispatches toggleTodoComplete action when "Done" button is clicked', async () => {
    const { getAllByText } = render(
      <Provider store={store}>
        <ToDoPage />
      </Provider>
    );

    const doneButton = getAllByText("Done")[0];
    await userEvent.click(doneButton);

    expect(store.dispatch).toHaveBeenCalledWith(toggleTodoComplete(1));
  });

  it('dispatches deleteTodo action when "Remove" button is clicked', async () => {
    const { getAllByText } = render(
      <Provider store={store}>
        <ToDoPage />
      </Provider>
    );

    const removeButtons = getAllByText("Remove");
    await userEvent.click(removeButtons[0]);

    expect(store.dispatch).toHaveBeenCalledWith(deleteTodo(1));
  });

  it("updates localStorage when todos change", () => {
    const setItemSpy = jest.spyOn(Storage.prototype, "setItem");

    render(
      <Provider store={store}>
        <ToDoPage />
      </Provider>
    );

    expect(setItemSpy).toHaveBeenCalledWith(
      "todos",
      JSON.stringify(store.getState().todos.todos)
    );

    setItemSpy.mockRestore();
  });
});
