import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      clicked: false
    }
  }

  timer = () => {
    const newTime = this.state.time + 1;
    this.setState({
      time: newTime
    });
  }

  handleTimer = () => {
    const newTime = setInterval(this.timer,1000);

    if (this.state.clicked) {
      clearInterval(this.timer);
      this.setState({
        time: 0,
        clicked: false
      });
    } else {
      this.setState({
        time: newTime,
        clicked: true
      });
    }
  }

  render() {
    const {time, clicked} = this.state;
    return (
      <div>
       <h1>You clicked the button {time} seconds ago.</h1>
       <button onClick={this.handleTimer}>{clicked ? 'Stop' : 'Start'}</button>
      </div>
    )
  }
}

export default App;
