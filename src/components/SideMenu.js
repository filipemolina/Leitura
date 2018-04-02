import React, { Component } from 'react'
import Item from './Item'
import SubItem from './SubItem'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// Material UI imports
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

// Action Dispatchers
import { setCurrentPage, toggleCategoryDropdown } from '../actions'

class SideMenu extends Component{

	pushToHistory = url => {
		this.props.setCurrentPage(url)
		this.props.history.push(url)
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
						isPrimary={this.props.currentPage === "/"}
					/>

					<SubItem 
						text="Categories"
						subItems={this.props.categories}
						currentPage={this.props.currentPage}
						isOpen={this.props.isCategoryOpen}
						toggleCategory={() => this.toggleCategory()}
						handleClick={(url) => this.pushToHistory(url)}
						toggleCategoryButton={() => this.props.toggleCategory()}
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

const mapStateToProps = (state, props) => ({
	currentPage: state.ui.currentPage,
	isCategoryOpen: state.ui.isCategoryDropdownOpen
})

const mapDispatchToProps = dispatch => ({
	setCurrentPage: (url) => dispatch(setCurrentPage(url)),
	toggleCategory: () => dispatch(toggleCategoryDropdown())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (SideMenu))