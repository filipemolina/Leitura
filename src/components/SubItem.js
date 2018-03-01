import React, { Component } from 'react'
import Item from "./Item"
import { connect } from 'react-redux'

// Action dispatchers
import * as Actions from "../actions"

class SubItem extends Component {

	render(){

		const { text, subItems, isOpen } = this.props

		// Set the correct height, padding, etc.. to the container of the subItems based off of wheter 
		// the isOpen property of state

		let style

		if(!isOpen)
			style = {
				height: '0',
				padding: '0',
				border: '0',
				overflow: 'hidden'
			}
		else
			style = {
				height: 'auto'
			}

		return(
			<div className="sub-menu">

				{/* Top Level Item */}

				<Item 
					icon="categories" 
					text={text}
					isDropDown={true}
					isDropDownOpen={isOpen}
					handleClick={() => this.props.toggleCategoryDropdown()}
				/>

				<div className="sub-items" style={style}>

					{/* Iterate through all subItems and create the MenuItems for each one */}

					{subItems.map((item) => (
						<Item
							inset={true}
							text={item}
							key={item}
							url={`/category/${item}`}
							handleClick={() => this.props.handleClick(`/category/${item}`)}
						/>
					))}

				</div>
				
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	isOpen: state.ui.isCategoryDropdownOpen
})

const mapDispatchToProps = dispatch => ({
	toggleCategoryDropdown: () => dispatch(Actions.toggleCategoryDropdown()),
	setCurrentPage: (url) => dispatch(Actions.setCurrentPage(url))
})

export default connect(mapStateToProps, mapDispatchToProps) (SubItem)