import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'

class UserItem extends Component {
  constructor(){
    super();
    this.state = {
      isRedirected: false
    }
    this.onClick = this.onClick.bind(this);
  }
  onClick(e){
    //TODO
    this.setState({ isRedirected: true });
  }
  render(){
    const { name, last_name, id, facebook } = this.props;
    if (this.state.isRedirected) {
      return(<Redirect to={ "detail/" + id } />);
    }
    return(
      <div className="card" onClick={ this.onClick }>
        <div className="card-content">
          <div className="UserItem-leftBox">
            <img
              className="UserItem-image"
              src="https://tse1.mm.bing.net/th?id=OIP.YdkNhFNLUQ_NN3gZir70pQHaHZ&pid=15.1&P=0&w=300&h=300"
              alt="profile"/>
          </div>
          <div className="UserItem-rightBox">
            <h2 className="UserItem-name">{ name + " " + last_name }</h2>
            <h3 className="UserItem-facebook">{ facebook }</h3>
          </div>
        </div>
      </div>
    );
  }
}

UserItem.propTypes = {
  name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  facebook: PropTypes.string
}

export default UserItem;
