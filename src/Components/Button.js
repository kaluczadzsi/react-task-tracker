import PropTypes from 'prop-types';

const Button = ({ color, onAdd, showAdd }) => {
  return (
    <button
      onClick={onAdd}
      className="btn"
      style={{ backgroundColor: color }}
      text={showAdd ? 'Close' : 'Add'}
    >
      Add
    </button>
  );
};

Button.defaultProps = {
  color: 'steelblue',
};

Button.propTypes = {
  color: PropTypes.string,
};

export default Button;
