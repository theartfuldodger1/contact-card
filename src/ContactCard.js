import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import ReactDOM from 'react-dom';

class ContactCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            mobile: props.mobile,
            email: props.email
        }
        setTimeout(this.updateName.bind(this), 2000)
    }
    //React says we have to define render!!!
    render() {
        return (
            <div id={this.props.name }>{this.props.message}</div>
        );
    }
};

const ContactCard1 = props => {
    return (
        <div className="contact">
            <div>

            </div>
        </div>
    );
};

ContactCard.PropTypes = {
    name: PropTypes.string.isRequired,
    mobile: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired

}

export default ContactCard1;