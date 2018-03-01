import React, { Component } from 'react'
import Item from "./Item"
import { capitalize } from '../utils/helpers'

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
					handleClick={this.props.toggleCategoryButton}
				/>

				<div className="sub-items" style={style}>

					{/* Iterate through all subItems and create the MenuItems for each one */}

					{subItems.allIds.map((item) => (
						<Item
							inset={true}
							text={capitalize(item)}
							key={item}
							url={`/category/${item}`}
							handleClick={() => this.props.handleClick(`/category/${item}`)}
							isPrimary={this.props.currentPage === `/category/${item}`}
						/>
					))}

				</div>
				
			</div>
		)
	}
}

export default SubItem