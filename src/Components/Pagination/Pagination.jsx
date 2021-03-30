import styles from "./Pagination.module.css";

const Pagination = ({ pageLinks = {} }) => {
  const { first, next, last, prev } = pageLinks;

  return (
    <div className={styles.container}>
      <button
        data-testid="button-first"
      >
        first-page
      </button>
      <button
        data-testid="button-prev"
      >
        prev-page
      </button>
      <button data-testid="button-current">1</button>
      <button
        data-testid="button-next"
      >
        next-page
      </button>
      <button
        data-testid="button-last"
      >
        last-page
      </button>
    </div>
  );
};

export { Pagination };
