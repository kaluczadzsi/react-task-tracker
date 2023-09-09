import PropTypes from 'prop-types';

const Button = ({ color }) => {
  return (
    <button className="btn" style={{ backgroundColor: color }}>
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
