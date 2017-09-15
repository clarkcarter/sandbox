import React from 'react';

class Timestamp extends React.Component {
  render() {

    const formatDate = (date) => {
      return date.toLocaleDateString();
    }

    return (
      <div className="Comment-date">
        {formatDate(this.props.date)}
      </div>
    )
    
  }
}

export default Timestamp;
