import React, { Component } from 'react';

class NMISetupStep2 extends Component {
    componentDidMount() {
        document.title = "Elevate - NMI Setup Step 2";
    }

    render() {
      return (
        <div className="NMISetupStep2">
          <h1>NMI</h1>
          <h2>Step 2</h2>
        </div>
      );
    }
  }

export default NMISetupStep2;