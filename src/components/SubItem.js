import React, { Component } from 'react'
import Item from "./Item"

class SubItem extends Component {

	render(){

		const { text, primary, subItems, currentPage, isOpen } = this.props

		// Set the correct height, padding, etc.. to the container of the subItems based off of wheter 
		// the isOpen property of state

		//<MenuItem
		//	insetChildren={true}
		//	primaryText={item}
		//	onClick={this.props.handleClick(item, "")}
		///>

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
					primary={primary}
					handleClick={this.props.toggleCategory}
					isDropDown={true}
					isDropDownOpen={isOpen}
				/>

				<div className="sub-items" style={style}>

					{/* Iterate through all subItems and create the MenuItems for each one */}

					{subItems.map((item) => (
						<Item
							inset={true}
							text={item}
							handleClick={() => this.props.handleClick(item, "")}
							primary={currentPage === item}
							key={item}
						/>
					))}

				</div>
				
			</div>
		)
	}
}

export default SubItem