import React from 'react';
import PropTypes from 'prop-types';
import { CustomInput } from 'reactstrap';

const InputComponent = ({ onChange, type, name, value, disabled, id, ...props }) => {
  return (
    <CustomInput
      onChange={onChange}
      type={type}
      name={name}
      value={value}
      disabled={disabled}
      id={id}
      {...props}
    />
  );
};

InputComponent.propTypes = {

  /**
   * element id
   */
  id: PropTypes.string.isRequired,

  /**
   * Fire on element change
   */
  onChange: PropTypes.func,

  /**
   * Element type: submit or button
   */
  type: PropTypes.string,

  /**
   * Disable element
   */
  disabled: PropTypes.bool,

  /**
   * element name
   */
  name: PropTypes.string,

  /**
   * element value
   */
  value: PropTypes.string,
};

InputComponent.defaultProps = {
  onClick: () => { },
  type: 'text',
  disabled: false,
  name: '',
  value: '',
};

export default InputComponent;