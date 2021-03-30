import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  return (
    <div>
      {[].map((item) => {
        return (
          <TodoListItem/>
        );
      })}
    </div>
  );
};

export default TodoList;
