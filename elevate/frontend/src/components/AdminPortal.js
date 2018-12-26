import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; //delete after
import Portal from "./Portal.js";
import AdminDashboard from "./AdminDashboard";
import AddBusiness from "./AddBusiness";
import NMISetupStep1 from "./NMISetupStep1";
import NMISetupStep2 from "./NMISetupStep2";


class AdminPortal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        id: null,
      }
    }

    componentDidMount() {
      //if you not logged in kick out of page or not correct id

        this.setState({ // for now until we connect with backend
          id: this.props.match.params.id,
          username: "Admin"
        })
        // params.id
    }
  
    render() {
      /*  routes is a list of route objects

          path: the link needed to get to the specific route
          name: the name to be displayed on the sidebar
              if empty, the route will not appear on the sidebar
          selected: shows which tab to highlight if currently on this route
          exact: if true the path has to be exactly as shown.
          main: the main component to render to the right of the sidebar
      */
     let routes = [];
      if (this.state.id !== null) {
        routes = [ //routes will also become props
          {
            path: `/frontend/admin/${this.state.id}`,
            name: "",
            selected: "Dashboard",
            exact: true,
            main: () => <AdminDashboard/>
          },
          {
            path: `/frontend/admin/${this.state.id}/dashboard`,
            name: "Dashboard",
            selected: "Dashboard",
            main: () => <AdminDashboard/>
          },
          {
            path: `/frontend/admin/${this.state.id}/add-business`,
            name: "Add Business",
            selected: "Add Business",
            main: () => 
              <AddBusiness 
                NMILink={`/frontend/admin/${this.state.id}/NMIsetup-1`}
              />
          },
          {
            path: `/frontend/admin/${this.state.id}/NMIsetup-1`,
            name: "",
            selected: "Add Business",
            main: () => 
              <NMISetupStep1 
                NMIStep2Link={`/frontend/admin/${this.state.id}/NMIsetup-2`}
              />
          },
          {
            path: `/frontend/admin/${this.state.id}/NMIsetup-2`,
            name: "",
            selected: "Add Business",
            main: () => <NMISetupStep2/>
          },
        ];
      }
      return (
          this.state.id !== null ? <Portal routes={routes} username={this.state.username}/> : <div></div>
      );
    }
  }

export default AdminPortal;