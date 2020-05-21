import React from "react";

class PromptAndDetails extends React.Component {
  render() {
    const randomColor = this.props.displayColor();
    const html = document.documentElement;
    html.style.backgroundColor = randomColor;

    return (
      <div>
        <div
          className="fadeIn promptBox"
          key={Math.random()}
          style={{ color: randomColor, backgroundColor: "white" }}
        >
          <h1 className="prompt">“{this.props.prompt}”</h1>
          <p className="promptDetails">
            {this.props.details ? this.props.details : ""}
          </p>
        </div>
        <button
          style={{ backgroundColor: randomColor }}
          className="newPromptButton"
          onClick={this.props.handleClick}
        >
          New prompt
        </button>
      </div>
    );
  }
}

export default PromptAndDetails;
