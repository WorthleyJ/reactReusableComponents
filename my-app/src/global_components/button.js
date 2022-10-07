import React from 'react';

class Button extends React.Component {
    render() {
        console.log("props:", this.props);
    

        return <button
                    disabled={this.props.buttonInfo.disabled}
                    className={`default-btn ${this.props.buttonInfo.buttonStyle ? this.props.buttonInfo.buttonStyle : ""}`}
                    onClick={() => this.props.buttonInfo.onClick(this.props.buttonInfo.info)} >
            {this.props.buttonInfo.info}
        </button>;
    }
  }

export default Button;