import React, { useState } from "react";
import styles from "./TodoInput.module.css";

const TodoInput = ({ handleSubmit }) => {
  return (
    <>
      <h1>Todo</h1>
      <form className={styles.container} onSubmit={onSubmit}>
        <input
          className={styles.inputBox}
          data-testid="input-box"
          type="text"
        />
        <input
          data-testid="add-task-button"
          className={styles.button}
          type="submit"
        />
      </form>
    </>
  );
};

export { TodoInput };
