import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/dashboard",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/add-business",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  },
  {
    path: "/NMIsetup-1",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  },
  {
    path: "/NMIsetup-2",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  },
];

class AdminPortal extends Component {
    render() {
      return (
        <div className="AdminPortal">
          this is the AdminPortal
        </div>
      );
    }
  }

export default AdminPortal;