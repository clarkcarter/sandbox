import React from 'react';
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
export default App;
