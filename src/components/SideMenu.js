import React, { Component } from 'react'

// Material UI imports
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

class SideMenu extends Component{
	render(){
		return(
			<div className="side-menu">
				<Drawer open={this.props.isMenuOpen} containerStyle={{height: 'calc(100% - 64px)', top: 64}}>
					<MenuItem>Home Page</MenuItem>
					<MenuItem>Categorias</MenuItem>
					<MenuItem>Adicionar Postagem</MenuItem>
				</Drawer>
			</div>
		)
	}
}

export default SideMenu