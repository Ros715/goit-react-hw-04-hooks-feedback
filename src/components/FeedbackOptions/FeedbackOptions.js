import PropTypes from "prop-types";

function FeedbackOptions({ options, onLeaveFeedback }) {
  //console.log(options);
  return (
    <div>
      {options.map((opt) => (
        <button key={opt.id} type="button" onClick={opt.handleClick}>
          {opt.name}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      handleClick: PropTypes.func.isRequired,
    })
  ),
};

export default FeedbackOptions;
