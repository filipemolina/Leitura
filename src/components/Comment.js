import React, { Component } from 'react'
import dateFormat from 'dateformat'

// Material UI imports
import { Card, CardHeader} from 'material-ui/Card'
import NavigationClose from 'material-ui/svg-icons/navigation/close'

class Comment extends Component {
	render(){

		const { author, text, timestamp } = this.props

		return(
			<Card className="comment">
				<CardHeader
					title={author}
					subtitle={text}
					avatar="https://picsum.photos/150"
					showExpandableButton={true}
					openIcon={<NavigationClose onClick={() => console.log("CLICOU EM FECHAR")}/>}
					closeIcon={<NavigationClose onClick={() => console.log("CLICOU EM FECHAR")}/>}
				/>
				<div className="comment-timestamp">{dateFormat(timestamp, "mmmm dS yyyy h:MMTT")}</div>
			</Card>
		)
	}
}

export default Comment