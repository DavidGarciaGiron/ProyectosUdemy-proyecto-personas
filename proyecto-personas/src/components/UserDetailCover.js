import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

class UserDetailCover extends Component {
  constructor(){
    super();
    this.state = {
      cover: 'https://tse1.mm.bing.net/th?id=OIP.YdkNhFNLUQ_NN3gZir70pQHaHZ&pid=15.1&P=0&w=300&h=300'
    }
  }
  render(){
    const { firstName, lastName } = this.props;
    return(
      <div className="UserDetailCover">
        <img
          src={ this.state.cover }
          className="UserDetailCover-img"
          alt="avatar"/>
        <div>
          <h2 className="UserDetailCover-name">{ firstName + " " + lastName }</h2>
        </div>
      </div>
    );
  }
}

UserDetailCover.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
}

export default UserDetailCover;
