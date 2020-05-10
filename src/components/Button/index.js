import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const ButtonComponent = ({ text, onClick, type, disabled, className, color }) => {
  return (
    <Button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={className}
      color={color}
    >
      {text}
    </Button>
  );
};

ButtonComponent.propTypes = {
  /**
   * Content show in element
   */
  text: PropTypes.node.isRequired,

  /**
   * Fire on element click
   */
  onClick: PropTypes.func,

  /**
   * Element type: submit or button
   */
  type: PropTypes.string,

  /**
   * Disable element
   */
  disabled: PropTypes.bool,

  /**
   * Put class css for element
   */
  className: PropTypes.string,

  /**
   * color of button
   */
  color: PropTypes.string,
};

ButtonComponent.defaultProps = {
  onClick: () => { },
  type: 'button',
  disabled: false,
  className: null,
  color: 'success'
};

export default ButtonComponent;