import React from "react";

class PromptAndDetails extends React.Component {
  render() {
    const randomColor = this.props.displayColor();
    const html = document.documentElement;
    html.style.backgroundColor = randomColor;

    return (
      <div className="promptContainer">
        <button
          className="newPromptButton gradientFlow"
          onClick={this.props.handleClick}
        >
          Deal a Collab Card
        </button>
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
      </div>
    );
  }
}

export default PromptAndDetails;
