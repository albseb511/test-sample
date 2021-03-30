import React from "react";
import styles from "./TodoItem.module.css";

const TodoListItem = () => {
  return (
    <div className={styles.itemContainer} data-testid="list-todo">
      <div data-testid="item-title"> Title </div>
      <div className={styles.rightBox}>
        <div
          data-testid="item-status"
          className={`${styles.statusCircle} ${styles.done}`}
        ></div>
      </div>
    </div>
  );
};

export default TodoListItem;
