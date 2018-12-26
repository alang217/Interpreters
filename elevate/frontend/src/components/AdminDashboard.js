import React, { Component } from 'react';

class AdminDashboard extends Component {
    componentDidMount() {
        document.title = "Elevate - Dashboard";
    }
    
    render() {
      return (
        <div className="AdminDashboard">
          <h1>Dashboard</h1>
        </div>
      );
    }
  }

export default AdminDashboard;