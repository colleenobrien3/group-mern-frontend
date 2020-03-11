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
      
        <div className="About">
        
          <blockquote>
            {this.state.quote}
            {/* <body>{this.state.author}</body> */}
          </blockquote>
          {/* <box onClick={this.handleClick}> */}
            <div>
              <h5>About</h5>
             <p className="P1">Jul 1, 2020 - This design made by annu. uxe, a
            user is a professional design. The looks so
            professional and standard because of the color choices. The text
            colors are white and a variation of white while the background color
            is deep 
             </p>
            </div>
          {/* </box> */}
        </div>
    );
  }
}

export default About;
