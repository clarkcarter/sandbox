import React from 'react';
import ErrorBox from './ErrorBox';
import Title from './Title';
import Body from './Body';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return(
      <ErrorBox>
        <Title />
        <Body />
        <Footer />
      </ErrorBox>
    )
  }
}

export default App;
