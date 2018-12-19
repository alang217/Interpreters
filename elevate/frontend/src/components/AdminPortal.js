import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const routes = [ //routes will also become props
  {
    path: "/frontend/admin/0",
    exact: true,
    sidebar: () => <div>dashboard component</div>,
    main: () => <h2>dashboard</h2>
  },
  {
    path: "/frontend/admin/0/dashboard",
    sidebar: () => <div>dashboard component</div>,
    main: () => <h2>dashboard</h2>
  },
  {
    path: "/frontend/admin/0/add-business",
    sidebar: () => <div>add business component</div>,
    main: () => <h2>add business</h2>
  },
  {
    path: "/frontend/admin/0/NMIsetup-1",
    sidebar: () => <div>NMI setup step 1 component</div>,
    main: () => <h2>nmi setup</h2>
  },
  {
    path: "/frontend/admin/0/NMIsetup-2",
    sidebar: () => <div>NMI setup step 2 component</div>,
    main: () => <h2>nmi setup</h2>
  },
];

class AdminPortal extends Component {
    render() {
      return (
        <Router>
          <div style={{ display: "flex" }}>
            <div
              style={{
                padding: "10px",
                width: "40%",
                background: "#f0f0f0"
              }}
            >
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li> {/* The link tags will be become props also change id
                         Also may need to add a /id/bussiness/id route to
                         instruct to pull data and fill appropriate fields
                       */}
                  <Link to="/frontend/admin/0/dashboard">dashboard</Link>
                </li>
                <li>
                  <Link to="/frontend/admin/0/add-business">add business</Link>
                </li>
                <li>
                  <a href="#" >Logout</a>
                  
                </li>
              </ul>

              {/* {routes.map((route, index) => (
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
              ))} */}
            </div>

            <div style={{ flex: 1, padding: "10px" }}>
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