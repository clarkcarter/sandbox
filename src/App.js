import React from 'react';
import { MiddleMan } from './MiddleMan';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Replace this text'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
      this.setState({ text: e.target.value });
  }

  componentDidUpdate(){
      if (this.state.text.length === 0) {
        this.setState({
          text: "Replace this text"
        });
      }
  }

  render() {
    return <MiddleMan onChange={this.handleChange} text={this.state.text}/>;
  }
}

export default App;
