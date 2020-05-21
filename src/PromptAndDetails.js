import React from "react";

class PromptAndDetails extends React.Component {
  render() {
    const randomColor = this.props.displayColor();
    const html = document.documentElement;
    html.style.backgroundColor = randomColor;

    return (
      <div className="promptContainer">
        <button
          className="button newPromptButton gradientFlow hoverTransition"
          onClick={this.props.handleClick}
        >
          Deal a Collab Card
        </button>
        <label htmlFor="fairPlayButton" className="button fairPlayButton hoverTransition">;)</label>
        <input type="checkbox" id="fairPlayButton" className="fairPlayButton-input"></input>
        <div className="fairPlay">
          <div className="fairPlay-content">
            Inspired by www.trytriggers.com, Collab Cards are designed to provoke thought and highlight core values during your meeting at TeachersPayTeachers.
            You can use them to widen your view, to narrow your concept, to expand your perspective, or to challenge your norms. Or just to break the ice.
            These cards have been intentionally designed to incorporate TpT values. In line we these values, we'd like to remind you to:
            - listen first
            - challenge ideas respectfully
            - ask to understand
            - speak to each other with respect
            Lastly, we recommend that you take turns doing the flipping. This will give quieter voices a chance to enter the conversation and newer voices a chance to lead.
          </div>
        </div>
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
