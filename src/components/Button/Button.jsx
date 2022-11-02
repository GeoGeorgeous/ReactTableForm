import React from 'react';
import PropTypes from 'prop-types';
import '../App/App.sass';
import './Button.sass';

function Button({ icon, iconOnHover, text, isSubmitBtn, onClick }) {
  return (
    <button
      className={`btn btn__icon_${icon} ${
        iconOnHover ? 'btn__icon_onhover' : ''
      } `}
      aria-label={text}
      type={isSubmitBtn ? 'submit' : 'button'}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.string, // button image class 'btn__icon_{string}'
  iconOnHover: PropTypes.bool, // icon is shown only on hover
  text: PropTypes.string, // button text and aria-label
  isSubmitBtn: PropTypes.bool, // Submit / Reset / Button (default)
  onClick: PropTypes.func, // Onclick callback
};

Button.defaultProps = {
  icon: 'none',
  iconOnHover: false,
  text: 'Button',
  isSubmitBtn: false,
  onClick: () => {},
};

export default Button;
