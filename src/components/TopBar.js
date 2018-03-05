import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import TopFilter from './TopFilter'

class TopBar extends Component {
	render(){
		return(
			<AppBar 
				title={this.props.title} 
				style={{ position: 'fixed' }} 
				onLeftIconButtonClick={this.props.onLeftIconButtonClick}
				iconElementRight={this.props.showFilter ? <TopFilter setOrdering={this.props.setOrdering} order={this.props.order}/> : <br />}
			/>
		)
	}
}

export default TopBar