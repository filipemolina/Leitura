import React from 'react'
import TopBar from './TopBar'
import SideMenu from './SideMenu'

const Layout  = props => {
	return(
		<div>
			{/* Top Bar of the application */}
      <TopBar 
        title={props.title} 
        onLeftIconButtonClick={props.tobBarClick}
        showFilter={props.showFilter}
      />

      {/* Side Menu containing navigation links */}
      <SideMenu 
        handleOpenModal={props.handleOpenModal}
        isMenuOpen={props.isMenuOpen}
        categories={props.categories}
      />
		</div>
	)
}

export default Layout