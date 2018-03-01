import React, { Component } from 'react'
import Item from './Item'
import SubItem from './SubItem'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// Material UI imports
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

// Action Dispatchers
import { setCurrentPage, fetchCategories } from '../actions'

class SideMenu extends Component{

	state = {
		categories: [
			'Category1',
			'Category2',
			'Category3',
			'Category4',
		],
		categorySubmenuIsOpen: false,
	}

	pushToHistory = url => {
		this.props.setCurrentPage(url)
		this.props.history.push(url)
	}

	// Open and close the category subMenu
	toggleCategory = () => this.setState((prevState) => ({
		categorySubmenuIsOpen: !prevState.categorySubmenuIsOpen
	}))

	componentDidMount(){
		this.props.fetchCategories()
	}

	render(){

		return(
			<div className="side-menu">
				<Drawer open={this.props.isMenuOpen} containerStyle={{height: 'calc(100% - 64px)', top: 64}}>
					<MenuItem primaryText="Navigation" disabled={true} />
					<Item 
						icon="home" 
						text="Home Page"
						url="/"
						handleClick={() => this.pushToHistory("/")}
					/>

					<SubItem 
						text="Categories"
						subItems={this.state.categories}
						currentPage={this.props.currentPage}
						isOpen={this.state.categorySubmenuIsOpen}
						toggleCategory={() => this.toggleCategory()}
						handleClick={(url) => this.pushToHistory(url)}
					/>

					<Item 
						icon="add" 
						text="Add Post"
						handleClick={this.props.handleOpenModal}
					/>
				</Drawer>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	setCurrentPage: (url) => dispatch(setCurrentPage(url)),
	fetchCategories: () => dispatch(fetchCategories())
})

export default withRouter(connect(null, mapDispatchToProps) (SideMenu))