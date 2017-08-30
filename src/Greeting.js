import React from 'react';

class Greeting extends React.Component {
	render() {
		return (
			<div>
				This is my greeting: {this.props.greeting}
			</div>
		)
	}
}

export default Greeting