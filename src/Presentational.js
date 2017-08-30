import React from 'react';
import Greeting from './Greeting';
import Input from './Input';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>This is my amazing app</h1>
        <Greeting greeting={this.props.greeting}/>
        <Input onChange={this.props.onChange}/>
      </div>
    );
  }
}

export default App;
