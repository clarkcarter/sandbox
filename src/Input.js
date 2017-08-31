import React from 'react';
import PropTypes from 'prop-types';

export const Input = (props) => {
  return <input style={{width: 300}} placeholder="Enter your new text here" onChange={props.onChange}/>;
}

Input.propTypes = {
  onChange: PropTypes.func
}
