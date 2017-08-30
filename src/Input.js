import React from 'react';

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onChange(e.target.value)
	}

	render() {
		return (
			<div>
				<select onChange={this.handleChange} >
					<option>Was up boiiiii</option>
					<option>Hey brother</option>
				</select>
			</div>
		)
	}
}

export default Input