import React, { Component, Proptypes } from 'react'
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

export default class Input extends Component {
	render() {
		const { handleChange, value,handleClick  } =this.props

		return (
			<div>
				<TextField
					hintText="Type a message" 
                    floatingLabelText="Message.." fullWidth="true"
                    value = {value}
                    onChange = {handleChange} >
				</TextField>


				<RaisedButton label = 'Send'
                  onClick = {handleClick}
				></RaisedButton>	
			</div>
		)

	}
}

/*Input.propTypes = {
	onChange: Proptypes.func.isRequire,
	onClick: Proptypes.func.isRequire,
	value: Proptypes.string.isRequire
}*/