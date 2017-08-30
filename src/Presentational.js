import React from 'react';
import PropTypes from 'prop-types';
import Greeting from './Greeting';
import Input from './Input';

const App = (props) => {
  return (
    <div>
      <h1>This is my amazing app</h1>
      <Greeting greeting={props.greeting}/>
      <Input onChange={props.onChange}/>
    </div>
  );
}

App.propTypes = {
  greeting: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default App;
