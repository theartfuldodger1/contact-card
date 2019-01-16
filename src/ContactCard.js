import React from "react";
import PropTypes from "prop-types";
import faker from "faker";

/*Define a ‘ContactCard’ component that takes in a contact name,
mobile number, work phone number, and email as properties and
displays the results in a visually appealing way*/

const ContactCard = props => {
  return (
    <div className="ui card">
      <div className="image">
        <img alt="avatar" src={faker.image.avatar()} />
      </div>
      <div className="contactInfo">
        <div className="userName">{props.userName}</div>
        <div className="mobile">Mobile: {props.mobileNum}</div>
        <div className="work">Work: {props.workNum}</div>
        <div className="meta">
          <span className="email">Email: {props.emailAddy}</span>
        </div>
      </div>
    </div>
  );
};

ContactCard.PropTypes = {
  userName: PropTypes.string.isRequired,
  mobileNum: PropTypes.string.isRequired,
  workNum: PropTypes.string.isRequired,
  emailAddy: PropTypes.string.isRequired
};

export default ContactCard;
