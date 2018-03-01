import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'

// Material UI imports
import ContentFilterList from 'material-ui/svg-icons/content/filter-list'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import Divider from 'material-ui/Divider'

const Filter = (props) => (
	<IconMenu
		iconButtonElement={<IconButton><ContentFilterList color={"#fff"} /></IconButton>}
	>
		<MenuItem primaryText="Sort by..." disabled/>
		<Divider />
		<MenuItem primaryText="Votes count" />
		<MenuItem primaryText="Date of creation" />
	</IconMenu>
)

class TopBar extends Component {
	render(){
		return(
			<AppBar 
				title={this.props.title} 
				style={{ position: 'fixed' }} 
				onLeftIconButtonClick={this.props.onLeftIconButtonClick}
				iconElementRight={this.props.showFilter ? <Filter /> : <br />}
			/>
		)
	}
}

export default TopBar