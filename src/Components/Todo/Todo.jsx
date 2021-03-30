import React, { useEffect, useState } from "react";
import { TodoInput } from "./TodoInput";
import TodoList from "./TodoList";
import { Pagination } from "../Pagination";
import styles from "./Todo.module.css";
import { Spinner } from "../Common/Spinner";

function Todo() {
  // you can also maintain separate isLoading, and isError states
  const [todos, setTodos] = useState({
    isLoading: false,
    data: [],
    isError: false,
  });
  

  return (
    <div className={styles.todoContainer}>
      <TodoInput />
      <TodoList/>
      <div className={styles.spinnerContainer}>
        <Spinner />
      </div>
      <div data-testid="error-tasks">Error</div>
      <Pagination/>
    </div>
  );
}

export default Todo;
