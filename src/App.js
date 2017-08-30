import React from 'react';
import Greeting from './Greeting';
import Input from './Input';
import Presentational from './Presentational';

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
      <Presentational />
    );
  }
}

export default App;
