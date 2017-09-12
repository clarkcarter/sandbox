import React from 'react';
import './ErrorBox.css';

const ErrorBox = ({children}) => {
  return (
    <div className="alert alert-danger error-box">
      <i class="fa fa-exclamation-triangle"></i>
      <p>{children}</p>
    </div>
  )
}

export default ErrorBox;
