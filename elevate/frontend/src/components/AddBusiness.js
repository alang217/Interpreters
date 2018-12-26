import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; //delete after

class AddBusiness extends Component {
    componentDidMount() {
        document.title = "Elevate - Add Business";
    }

    render() {
      return (
        <div className="AddBusiness">
          <h1>Add Business</h1>
          <Link to={this.props.NMILink}>NMI Setup</Link>
        </div>
      );
    }
  }

export default AddBusiness;