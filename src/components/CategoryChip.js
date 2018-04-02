import React from 'react'

// Material UI imports
import muiThemeable from 'material-ui/styles/muiThemeable'
import Chip from 'material-ui/Chip'

const CategoryChip  = props => {
	return(
		<Chip backgroundColor={props.muiTheme.palette.primary1Color}>
			{props.text}
		</Chip>
	)
}

export default muiThemeable() (CategoryChip)