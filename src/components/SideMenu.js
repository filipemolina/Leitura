import React, { Component } from 'react'
import Item from './Item'
import SubItem from './SubItem'

// Material UI imports
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

class SideMenu extends Component{

	state = {
		currentPage: 'home',
		categories: [
			'Category 1',
			'Category 2',
			'Category 3',
			'Category 4',
		],
		categorySubmenuIsOpen: false,
	}

	// Method to handle the click event in the Items of the Menu
	handleClick = (page, url) => this.setState({
		currentPage: page
	})

	// Open and close the category subMenu
	toggleCategory = () => this.setState((prevState) => ({
		categorySubmenuIsOpen: !prevState.categorySubmenuIsOpen
	}))

	render(){

		return(
			<div className="side-menu">
				<Drawer open={this.props.isMenuOpen} containerStyle={{height: 'calc(100% - 64px)', top: 64}}>
					<MenuItem primaryText="Navigation" disabled={true} />
					<Item 
						icon="home" 
						text="Home Page" 
						primary={this.state.currentPage === 'home'} 
						handleClick={() => this.handleClick('home')} 
					/>

					<SubItem 
						text="Categories" 
						primary={this.state.currentPage === 'category'} 
						subItems={this.state.categories}
						handleClick={(page, url) => this.handleClick(page, url)}
						currentPage={this.state.currentPage}
						isOpen={this.state.categorySubmenuIsOpen}
						toggleCategory={() => this.toggleCategory()}
					/>

					<Item 
						icon="add" 
						text="Add Post" 
						primary={this.state.currentPage === 'add-post'} 
						handleClick={this.props.handleOpenModal} 
					/>
				</Drawer>
			</div>
		)
	}
}

export default SideMenu