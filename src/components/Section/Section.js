import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.css";

function Section({title, children}) {
    return (
      <div>
        <p className={styles.title}>{title}</p>
        <div>{children}</div>
      </div>
    );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
