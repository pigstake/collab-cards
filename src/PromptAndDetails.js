import React from "react";

class PromptAndDetails extends React.Component {
  render() {
    const randomColor = this.props.displayColor();
    const html = document.documentElement;
    html.style.backgroundColor = randomColor;

    return (
      <div style={{ backgroundColor: "white" }} className="promptbox">
        <div
          className="fadeIn"
          key={Math.random()}
          style={{ color: randomColor }}
        >
          <h1 id="prompt">"{this.props.prompt}"</h1>
          <h5 id="details">
            -{this.props.details ? this.props.details : "Unknown"}-
          </h5>
        </div>
        <button
          style={{ backgroundColor: randomColor }}
          id="newprompt"
          onClick={this.props.handleClick}
        >
          New prompt
        </button>
      </div>
    );
  }
}

export default PromptAndDetails;
