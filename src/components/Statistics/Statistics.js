import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <p className={styles.statistics}>
        Good: <span>{good}</span>
      </p>
      <p className={styles.statistics}>
        Neutral: <span>{neutral}</span>
      </p>
      <p className={styles.statistics}>
        Bad: <span>{bad}</span>
      </p>
      <p className={styles.statistics}>
        Total: <span>{total}</span>
      </p>
      <p className={styles.statistics}>
        Positive feedback: <span>{Math.round(positivePercentage)}%</span>
      </p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
