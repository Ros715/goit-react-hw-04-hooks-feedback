import React, {useState} from "react";
//import PropTypes from "prop-types";
import Section from "./components/Section/Section.js";
import Statistics from "./components/Statistics/Statistics.js";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions.js";
import Notification from "./components/Notification/Notification.js";
//import "./App.css";

function App () {
  const [good,setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad,setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? (100 * good) / total : 0;
  }

  const onClickGood = (ev) => {
    setGood(good + 1);
  };
  const onClickNeutral = (ev) => {
    setNeutral(neutral + 1);
  };
  const onClickBad = (ev) => {
    setBad(bad + 1);
  };

    const buttonsOptions = [
      { id: "id-1", name: "Good", handleClick: onClickGood },
      { id: "id-2", name: "Neutral", handleClick: onClickNeutral },
      { id: "id-3", name: "Bad", handleClick: onClickBad },
    ];

    return (
      <div>
        <Section title="Please leave feedback"
          children={<FeedbackOptions options={buttonsOptions} />}>
        </Section>
        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics"
          children={
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          }>
          </Section>
        )}
      </div>
    );
}

export default App;
