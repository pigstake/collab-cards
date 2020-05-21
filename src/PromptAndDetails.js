import React from "react";

class PromptAndDetails extends React.Component {
  render() {
    const randomColor = this.props.displayColor();
    const html = document.documentElement;
    html.style.backgroundColor = randomColor;

    return (
      <div className="promptContainer">
        <div
          className="fadeIn prompt"
          key={Math.random()}
          style={{ color: randomColor, borderColor: randomColor}}
        >
          <h1 className="promptHeading">{this.props.prompt}</h1>
          <p className="promptDetails">
            {this.props.details ? this.props.details : ""}
          </p>
        </div>
        <button
          className="newPromptButton"
          onClick={this.props.handleClick}
        >
          Deal a new prompt
        </button>
      </div>
    );
  }
}

export default PromptAndDetails;
