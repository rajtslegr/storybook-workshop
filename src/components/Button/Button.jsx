import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'button--primary' : 'button--secondary';

  return (
    <button
      type="button"
      className={['button', `button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
