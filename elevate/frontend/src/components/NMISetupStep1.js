import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; //delete after

class NMISetupStep1 extends Component {
    componentDidMount() {
        document.title = "Elevate - NMI Setup Step 1";
    }

    render() {
      return (
        <div className="NMISetupStep1">
          <h1>NMI</h1>
          <h2>Step 1</h2>
          <Link to={this.props.NMIStep2Link}>Continue to NMI Step 2</Link>
        </div>
      );
    }
  }

export default NMISetupStep1;