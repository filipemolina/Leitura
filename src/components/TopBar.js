import React from 'react'
import AppBar from 'material-ui/AppBar'
import TopFilter from './TopFilter'

const TopBar  = props => {
	return(
		<AppBar 
			title={props.title} 
			style={{ position: 'fixed' }} 
			onLeftIconButtonClick={props.onLeftIconButtonClick}
			iconElementRight={props.showFilter ? <TopFilter setOrdering={props.setOrdering} order={props.order}/> : <br />}
		/>
	)
}

export default TopBar