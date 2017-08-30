import React from 'react';
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
      <Presentational greeting={this.state.greeting} onChange={this.onChange}/>
    );
  }
}

export default App;
