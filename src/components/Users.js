import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers, setSelectUser } from '../actions/userActions';
import { fetchPosts } from '../actions/postActions';

import {
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Users extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  
  updateUser = (e) => {
    const id = e.target.attributes.userkey.value;
    
    this.props.setSelectUser(id);
    this.props.fetchPosts(id);
    //className={this.state.selectedUser.id === user.id ? 'active' : null}
    //console.log(document.getElementById("user"+id).className);
  }

  render() {
    const userList = this.props.users.map(user => (
      <DropdownItem className='' key={user.id} id={'user'+user.id} >
        <div userkey={user.id} onClick={this.updateUser}>{user.name}</div>
      </DropdownItem>
    ));
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="./">Practice App</NavbarBrand>
          <Nav className="ml-auto mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle caret>
                Users
              </DropdownToggle>
              <DropdownMenu>
                { userList }
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

Users.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  setSelectUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  selectedUser: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  users: state.users.users,
  selectedUser: state.users.selectedUser
})

export default connect(mapStateToProps, { fetchUsers, setSelectUser, fetchPosts })(Users);