import React, { Component } from "react";
import PropTypes from "prop-types"; //npm install prop-types
import faker from "faker"; //npm install --save faker

/*Define a ‘ContactCard’ component that takes in a contact name,
mobile number, work phone number, and email as properties and
displays the results in a visually appealing way*/

class ContactCard extends Component {
  render() {
    return (
      <div className="ui card">
        <div className="image">
          <img alt="avatar" src={faker.image.avatar()} />
        </div>
        <div className="contactInfo">
          <div className="userName">{this.props.userName}</div>
          <div className="mobile">Mobile: {this.props.mobileNum}</div>
          <div className="work">Work: {this.props.workNum}</div>
          <div className="meta">
            <span className="email">Email: {this.props.emailAddy}</span>
          </div>
        </div>
      </div>
    );
  }
}

ContactCard.PropTypes = {
  userName: PropTypes.string.isRequired,
  mobileNum: PropTypes.string.isRequired,
  workNum: PropTypes.string.isRequired,
  emailAddy: PropTypes.string.isRequired
};

export default ContactCard;
