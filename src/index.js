import React from 'react';
import ReactDOM from 'react-dom';
import ContactCard from './ContactCard';


const App = () => {
    return (
        <div className="ui container contacts">
            <ContactCard>
                name="good question"
            </ContactCard>
        </div>
    );
};
