import React from 'react'

import AlertError from 'material-ui/svg-icons/alert/error'

const Page404  = props => {
	return(
		<div className="page-404">
			<h1><AlertError size={60}/></h1>
			<h1>404</h1>
			<p>This page does not exist!</p>
		</div>
	)
}

export default Page404