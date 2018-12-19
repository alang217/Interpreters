import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const routes = [ //routes will also become props
  {
    path: "/frontend/admin/0",
    exact: true,
    sidebar: () => 
      <span>
        <h2>Admin</h2> {/* Replace with admin username later */}
              <ul>
                <li> {/* The link tags will be become props also change id
                         Also may need to add a /id/bussiness/id route to
                         instruct to pull data and fill appropriate fields
                       */}
                  <span className="selected-indicator"></span>
                  <Link className="selected" to="/frontend/admin/0/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/frontend/admin/0/add-business">Add Business</Link>
                </li>
                <li>
                  <a href="/frontend/admin-login" >Logout</a>
                  {/* <Link to="/frontend/admin-login">Logout</Link> */}
                </li>
              </ul>
      </span>,
    main: () => <h2>dashboard</h2>
  },
  {
    path: "/frontend/admin/0/dashboard",
    sidebar: () => 
      <span>
      <h2>Admin</h2> 
            <ul>
              <li> 
                <span className="selected-indicator"></span>
                <Link className="selected" to="/frontend/admin/0/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/frontend/admin/0/add-business">Add Business</Link>
              </li>
              <li>
                <a href="/frontend/admin-login" >Logout</a>
              </li>
            </ul>
      </span>,
    main: () => <h1>dashboard</h1>
  },
  {
    path: "/frontend/admin/0/add-business",
    sidebar: () => 
      <span>
      <h2>Admin</h2>
            <ul>
              <li> 
                <Link to="/frontend/admin/0/dashboard">Dashboard</Link>
              </li>
              <li>
                <span className="selected-indicator"></span>
                <Link className="selected" to="/frontend/admin/0/add-business">Add Business</Link>
              </li>
              <li>
                <a href="/frontend/admin-login" >Logout</a>
              </li>
            </ul>
      </span>,
    main: () => <h1>add business</h1>
  },
  {
    path: "/frontend/admin/0/NMIsetup-1",
    sidebar: () => 
      <div>NMI setup step 1 component</div>,
    main: () => <h1>nmi setup</h1>
  },
  {
    path: "/frontend/admin/0/NMIsetup-2",
    sidebar: () => 
      <div>NMI setup step 2 component</div>,
    main: () => <h1>nmi setup</h1>
  },
];

class AdminPortal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dashboardSelected: true,
        addBussinessSelected: false,
      }
    }
  
    render() {
      return (
        <Router>
          <div className="row portal">
            <div
              // className="sidebar" 
              className="col-2 sidebar"
              // style={{
              //   padding: "10px",
              //   width: "40%",
              //   background: "#f0f0f0"
              // }}
            >
              {/* Used to be the normal div */}

              {routes.map((route, index) => ( // For a subheading wont need it
                // You can render a <Route> in as many places
                // as you want in your app. It will render along
                // with any other <Route>s that also match the URL.
                // So, a sidebar or breadcrumbs or anything else
                // that requires you to render multiple things
                // in multiple places at the same URL is nothing
                // more than multiple <Route>s.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.sidebar}
                />
              ))}                
            </div>

            <div 
              // className="right-container"
              className="col-10 right-container"
            >
              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </div>
          </div>
        </Router>
      );
    }
  }

export default AdminPortal;