import React, { Component } from 'react'
import TopBar from './TopBar'
import SideMenu from './SideMenu'

class Layout extends Component {
	render(){
		return(
			<div>
				{/* Top Bar of the application */}
        <TopBar 
          title={this.props.title} 
          onLeftIconButtonClick={this.props.tobBarClick}
          showFilter={this.props.showFilter}
        />

        {/* Side Menu containing navigation links */}
        <SideMenu 
          handleOpenModal={this.props.handleOpenModal}
          isMenuOpen={this.props.isMenuOpen}
          categories={this.props.categories}
        />
			</div>
		)
	}
}

export default Layout