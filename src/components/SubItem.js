import React from 'react'
import Item from "./Item"
import { capitalize } from '../utils/helpers'

const SubItem  = props => {

	const { text, subItems, isOpen } = props

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
				handleClick={props.toggleCategoryButton}
			/>

			<div className="sub-items" style={style}>

				{/* Iterate through all subItems and create the MenuItems for each one */}

				{subItems.map((item) => (
					<Item
						inset={true}
						text={capitalize(item.name)}
						key={item.name}
						url={`/${item.name}`}
						handleClick={() => props.handleClick(`/${item.name}`)}
						isPrimary={props.currentPage === `/${item.name}`}
					/>
				))}

			</div>
			
		</div>
	)
}

export default SubItem