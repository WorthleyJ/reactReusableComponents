import React from 'react';

class Button extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.handleMouseMove = this.handleMouseMove.bind(this);
    //     this.state = { 
    //         x: 0, y: 0 
    //     };
    // }


    render() {
        console.log("props:", this.props);

        return <button >
            new button
        </button>;
    }
  }

export default Button;