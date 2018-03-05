import React, { Component } from 'react'

// Material Ui imports
import ContentFilterList from 'material-ui/svg-icons/content/filter-list'
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import Divider from 'material-ui/Divider'

class TopFilter extends Component {

	setOrdering = (field, order) => {
		this.props.setOrdering(field, order)
	}

	render(){

		const { order } = this.props

		const itemsCheck = {
			voteScore: {
				asc: order.field === 'voteScore' && order.order === 'asc',
				desc: order.field === 'voteScore' && order.order === 'desc',
			},
			commentCount: {
				asc: order.field === 'commentCount' && order.order === 'asc',
				desc: order.field === 'commentCount' && order.order === 'desc',
			},
			timestamp: {
				asc: order.field === 'timestamp' && order.order === 'asc',
				desc: order.field === 'timestamp' && order.order === 'desc',
			}
		}

		return(
			<IconMenu
				iconButtonElement={<IconButton><ContentFilterList color={"#fff"} /></IconButton>}
			>
				<MenuItem primaryText="Sort by..." disabled/>
				<Divider />
				<MenuItem 
					primaryText="Votes count"
					rightIcon={<ArrowDropRight />}
					menuItems={[
						<MenuItem 
							primaryText="Asc"
							checked={itemsCheck.voteScore.asc}
							onClick={() => this.props.setOrdering("voteScore", "asc")}
						/>,
						<MenuItem 
							primaryText="Desc"
							checked={itemsCheck.voteScore.desc}
							onClick={() => this.props.setOrdering("voteScore", "desc")}
						/>
					]}
				/>
				<MenuItem 
					primaryText="Comments count" 
					rightIcon={<ArrowDropRight />}
					menuItems={[
						<MenuItem 
							primaryText="Asc"
							checked={itemsCheck.commentCount.asc}
							onClick={() => this.props.setOrdering("commentCount", "asc")}
						/>,
						<MenuItem 
							primaryText="Desc"
							checked={itemsCheck.commentCount.desc}
							onClick={() => this.props.setOrdering("commentCount", "desc")}
						/>
					]}
				/>
				<MenuItem 
					primaryText="Date of creation" 
					rightIcon={<ArrowDropRight />}
					menuItems={[
						<MenuItem 
							primaryText="Asc"
							checked={itemsCheck.timestamp.asc}
							onClick={() => this.props.setOrdering("timestamp", "asc")}
						/>,
						<MenuItem 
							primaryText="Desc"
							checked={itemsCheck.timestamp.desc}
							onClick={() => this.props.setOrdering("timestamp", "desc")}
						/>
					]}
				/>
			</IconMenu>
		)
	}
}

export default TopFilter