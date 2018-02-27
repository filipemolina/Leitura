import React, { Component } from 'react'

// Material UI imports
import muiThemeable from 'material-ui/styles/muiThemeable'
import Chip from 'material-ui/Chip'

class CategoryChip extends Component {
	render(){
		return(
			<Chip backgroundColor={this.props.muiTheme.palette.primary1Color}>
				{this.props.text}
			</Chip>
		)
	}
}

export default muiThemeable() (CategoryChip)