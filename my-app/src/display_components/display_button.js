import React from 'react';

import GlobalButton from "../global_components/button";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleResetButtonClick = this.handleResetButtonClick.bind(this);
        this.state = { 
            displayedInfo: "info will replace this text"
        };
    }

    handleButtonClick(displayedInfo) {
        this.setState((state, props) => {
            return { displayedInfo };
          });
    }

    handleResetButtonClick() {
        this.setState((state, props) => {
            return { displayedInfo: "info will replace this text" };
          });
    }

    createButtons() {
        const buttons = [{
            buttonStyle: "red-btn",
            disabled: false,
            onClick: this.handleButtonClick,
            info: "A red button"
        },{
            buttonStyle: "blue-btn",
            disabled: false,
            onClick: this.handleButtonClick,
            info: "A blue button"
        }, {
            // buttonStyle: "", // button will take the default class
            disabled: false,
            onClick: this.handleButtonClick,
            info: "A default button"
        }, {
            buttonStyle: "red-btn",
            disabled: true,
            onClick: this.handleButtonClick,
            info: "Button disabled"
        }, {
            buttonStyle: "green-btn",
            disabled: false,
            onClick: this.handleResetButtonClick,
            info: "Reset info text"
        }];

        const buttonGroup = buttons.map((info, index) => {
            return <GlobalButton
                buttonInfo={info}
                key={index}
            />
        });
    
        return <div>
            {buttonGroup}
        </div>;
    }

    infoDisplay() {
        return <div>
            <p>{this.state.displayedInfo}</p>
        </div>;
    }


    render() {
        return <div>
            <h2>Here are 3 buttons</h2>
            <p>click them to learn more</p>
            {this.createButtons()}
            {this.infoDisplay()}
        </div>;
    }
  }

export default Button;