import React from 'react';
import PropTypes from 'prop-types';

export const Input = (props) => {
  return <input onChange={props.onChange}/>;
}

Input.propTypes = {
  onChange: PropTypes.func
}
