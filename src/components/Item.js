import React, { Component } from 'react'

// Material UI imports
import muiThemeable from 'material-ui/styles/muiThemeable'
import MenuItem from 'material-ui/MenuItem'
import ActionHome from 'material-ui/svg-icons/action/home'
import ActionToc from 'material-ui/svg-icons/action/toc'
import ActionNoteAdd from 'material-ui/svg-icons/action/note-add'
import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down'
import HardwareKeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up'

class Item extends Component {
	render(){

		// Get the main variables from props
		const { primary1Color } = this.props.muiTheme.palette
		const { text, icon, isDropDown, isDropDownOpen, inset, isPrimary } = this.props

		// Test if this item is primary and set the color accordingly
		const color = this.props.isPrimary ? primary1Color : 'rgba(0,0,0,0.87)'

		let leftIcon

		// Set the icon with the already defined color
		switch(icon){
			case "home":
				leftIcon = <ActionHome color={color} />
				break;
			case "categories":
				leftIcon = <ActionToc color={color} />
				break;
			case "add":
				leftIcon = <ActionNoteAdd color={color} />
				break;
			default:
				leftIcon = null
				break;
		}

		// Set the correct dropdown icon

		let rightIcon

		if(isDropDown){
			if(isDropDownOpen)
				rightIcon = <HardwareKeyboardArrowUp />
			else 
				rightIcon = <HardwareKeyboardArrowDown />
		} else {
			rightIcon = null
		}

		return(
			<MenuItem 
				primaryText={text} 
				style={{color}} 
				leftIcon={leftIcon} 
				onClick={this.props.handleClick}
				rightIcon={rightIcon}
				insetChildren={inset}
			/>
		)
	}
}

export default muiThemeable() (Item)