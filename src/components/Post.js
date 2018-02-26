import React, { Component } from 'react'

// Material UI imports
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class Post extends Component{
	render (){
		return (
			<Card className="post">
				<CardHeader title="Post from Jake" subtitle="16 Jan 2018" avatar="https://picsum.photos/200" />
				<CardMedia>
					<img src="https://picsum.photos/500/300" alt="" />
				</CardMedia>
				<CardTitle title="Card title" subtitle="Card subtitle" />
				<CardText>
		      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
		      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
		      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
		    </CardText>
		    <CardActions>
		      <FlatButton label="Action1" />
		      <FlatButton label="Action2" />
		    </CardActions>
			</Card>
		)
	}
}

export default Post