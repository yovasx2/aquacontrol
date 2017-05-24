import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'

const LINK = {
  textDecoration: 'none',
  color: 'inherit',
}

const More = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={<IconButton><MoreVertIcon color="white"/></IconButton>}
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
    <Link to="/" style={LINK}>
      <MenuItem primaryText="Cerrar sesión" />
    </Link>
  </IconMenu>
);

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  _handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <AppBar title="Aquacontrol" onTitleTouchTap={this._handleToggle}
        onLeftIconButtonTouchTap={this._handleToggle}
        iconElementRight={<More/>}/>
        <Drawer open={this.state.open}>
          <Link to="/orders/new" style={LINK}>
            <MenuItem>
              <FontIcon className="fa fa-truck fa-lg"/>
              &nbsp;Pedidos
            </MenuItem>
          </Link>
          <Link to="/orders" style={LINK}>
            <MenuItem>
              <FontIcon className="fa fa-list fa-lg"/>
              &nbsp;Lista
            </MenuItem>
          </Link>
          <Link to="/employees" style={LINK}>
            <MenuItem>
              <FontIcon className="fa fa-group fa-lg"/>
              &nbsp;Empleados
            </MenuItem>
          </Link>
          <Link to="/bottles" style={LINK}>
            <MenuItem>
              <FontIcon className="fa fa-archive fa-lg"/>
              &nbsp;Envases
            </MenuItem>
          </Link>
        </Drawer>
      </div>
    );
  }
}