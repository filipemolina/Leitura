import React, { Component } from 'react'

// Material UI imports
import { Card, CardHeader} from 'material-ui/Card'

class Comment extends Component {
	render(){
		return(
			<Card className="comment">
				<CardHeader
					title={this.props.author}
					subtitle={this.props.text}
					avatar="https://picsum.photos/150"
				/>
			</Card>
		)
	}
}

export default Comment