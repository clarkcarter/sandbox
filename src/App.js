import React from 'react';
import Greeting from './Greeting';
import Input from './Input';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Wasssssup"
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(input){
    this.setState({ greeting: input })
  }

  render() {
    return (
      <div>
        <h1>This is my amazing app</h1>
        <Greeting greeting={this.state.greeting}/>
        <Input onChange={this.onChange}/>
      </div>
    );
  }
}

export default App;
