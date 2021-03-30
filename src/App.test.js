import {
  render,
  fireEvent,
  cleanup,
  waitFor,
  screen,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import Todo from "./Components/Todo/Todo";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const testIds = {
  firstButton: "button-first",
  nextButton: "button-next",
  lastButton: "button-last",
  prevButton: "button-prev",
  currentButton: "button-current",
  listTodo: "list-todo",
};

const makeTodos = (numberOfTodos) =>
  Array.from({ length: numberOfTodos }, (_, id) => ({
    title: `Title ${id}`,
    status: id % 2,
    id,
  }));

describe("test", () => {
  let mocker;
  beforeEach(() => {
    mocker = new MockAdapter(axios, { onNoMatch: "throwException" });
  });

  afterEach(cleanup);
  test("App renders correctly", async () => {
    const todoData = makeTodos(2);
    const el = document.createElement("div");

    mocker
      .onGet("https://json-server-mocker-masai.herokuapp.com/tasks", {
        params: {
          _page: 1,
          _limit: 5,
        },
      })
      .reply(200, todoData, {
        link: `<http://json-server-mocker-masai.herokuapp.com/tasks?_page=1&_limit=5>; rel="first", <http://json-server-mocker-masai.herokuapp.com/tasks?_page=2&_limit=5>; rel="next", <http://json-server-mocker-masai.herokuapp.com/tasks?_page=2&_limit=5>; rel="last"`,
      });

    const { getByTestId, findAllByTestId, findByText } = render(<App />);

    const firstButton = getByTestId(testIds.firstButton);
    expect(firstButton).toHaveTextContent("First");
    expect(firstButton).toBeDisabled();

    const lastButton = getByTestId(testIds.lastButton);
    expect(lastButton).toHaveTextContent("Last");
    expect(lastButton).toBeDisabled();

    const prevButton = getByTestId(testIds.prevButton);
    expect(prevButton).toHaveTextContent("Prev");
    expect(prevButton).toBeDisabled();

    const nextButton = getByTestId(testIds.nextButton);
    expect(nextButton).toHaveTextContent("Next");
    expect(nextButton).toBeDisabled();

    const currentButton = getByTestId(testIds.currentButton);
    expect(currentButton).toHaveTextContent("1");

    const elems = await findAllByTestId(testIds.listTodo);
    expect(elems.length).toBe(2);
  });
});
