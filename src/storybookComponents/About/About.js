import React, { Component } from "react";
// import massageBox from ".storybookComponents/massageBox/massageBox";
import "./About.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="about">
        <div>
          <blockquote>
            {this.state.quote}
            <body>{this.state.author}</body>
          </blockquote>
          <box onClick={this.handleClick}>
            Jul 1, 2019 - This Bootstrap footer design made by annu. uxe, a
            CodePen user is a professional design. The footer looks so
            professional and standard because of the color choices. The text
            colors are white and a variation of white while the background color
            is deep blue
          </box>
        </div>

        {/* <div>
          <h4>About text</h4>
        </div> */}
      </div>
    );
  }
}

export default About;
