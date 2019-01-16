import React from "react";
import ReactDOM from "react-dom";
import ContactCard from "./ContactCard";

const App = () => {
  return (
    <div className="ui three column centered grid">
      <div className="four wide column">
        <ContactCard
          userName="Sylvester Stalone"
          mobileNum="805.647.271"
          workNum="212.563.6685"
          emailAddy="rockybalboa@italianstallion.com"
        />
      </div>
      <div className="four wide column">
        <ContactCard
          userName="Cordell Walker"
          mobileNum="812.587.8500"
          workNum="212.423.2243"
          emailAddy="cordellwalker@texas.ranger.gov"
        />
      </div>
      <div className="four wide column">
        <ContactCard
          userName="John Wayne"
          mobileNum="812.387.4500"
          workNum="212.233.2243"
          emailAddy="the.duke@true.grit.com"
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
