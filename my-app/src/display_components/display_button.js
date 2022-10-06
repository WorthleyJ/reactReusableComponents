import React from 'react';

import GlobalButton from "../global_components/button";

class Button extends React.Component {
    constructor(props) {
        super(props);
        // this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { 
            displayedInfo: "info will replace this text"
        };
    }

    createButtons() {
        const buttons = [{
            buttonColor: "red",
            fontColor: "white",
            border: true,
            info: "A red button with white text and a visible border"
        }, {
            buttonColor: "blue",
            fontColor: "white",
            border: false,
            info: "A blue button with white text and a no visible border"
        }, {
            buttonColor: "yellow",
            fontColor: "black",
            border: true,
            info: "A yellow button with black text and a visible border"
        }];

        return buttons.forEach((info) => {
            <GlobalButton
                buttonInfo={info}
            />
        });
    }

    infoDisplay() {
        return <div>
            <p>{this.state.displayedInfo}</p>
        </div>;
    }


    render() {
        console.log("props:", this.props);

        return <div>
            <h2>Here are 3 buttons</h2>
            <p>click them to learn more</p>
            {this.createButtons()}
            {this.infoDisplay()}
        </div>;
    }
  }

export default Button;