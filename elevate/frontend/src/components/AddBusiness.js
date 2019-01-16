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
                <div className="smallboxed">
                    <h4>Business Information</h4>
                    <div className="subbox1">
                        <label for="business_name">Business Name</label>
                        <br/>
                        <input type="text" name="business_name" className="inputs"/>
                        <br/>
                        <label for="api_key">Business API Key</label>
                        <br/>
                        <input type="text" name="api_key" className="inputs" />
                        <br/>
                    </div>
                    <div className="subbox2">
                        <label for="username">Username</label>
                        <br/>
                        <input type="text" name="username" className="inputs" />
                        <br/>
                        <label for="Password">Password</label>
                        <br/>
                        <input type="text" name="Password " className="inputs" />
                        <br/>
                    </div>
                </div>
                <div className="smallboxed">
                        <h4>Business Owner Information</h4>
                        <div className="subbox1">
                            <label for="first_name">First_name</label>
                            <br/>
                            <input type="text" name="first_name" className=" inputs"/>
                            <br/>
                            <label for="Last_name">Last_name</label>
                            <br/>
                            <input type="text" name="Last_name" className="inputs"/>
                            <br/>
                        </div>
                        <div className="subbox2">
                            <label for="Email">Email</label>
                            <br/>
                            <input type="text" name="Email" className="inputs"/>
                            <br/>
                            <label for="Phone_Number">Phone Number</label>
                            <br/>
                            <input type="text" name="Phone_Number" className="inputs" />
                            <br/>
                        </div>
                    </div>
                  <div className="smallboxed">
                      <h4>Primary Address</h4>
                      <div className="subbox1">
                          <label for="Street_Address">Street Address</label>
                          <br/>
                          <input type="text" name="Street_Address" className="inputs"/>
                          <br/>
                          <label for="City">City</label>
                          <br/>
                          <input type="text" name="City" className="inputs" />
                          <br/>
                      </div>
                      <div className="subbox2">
                          <label for="Suite/API#">Suite/API#</label>
                          <br/>
                          <input type="text" name="Suite/API#" className="inputs"/>
                          <br/>
                          <div id="smaller_input">
                              <label for="State" >State</label>
                              <br/>
                              <input type="text" name="State" style={{width: '130px'}} />
                              <br/>
                          </div>
                          <div id="smaller_input">
                              <label for="Postal_Code" id="smaller_input">Postal Code</label>
                              <br/>
                              <input type="text" name="Postal_Code" style={{width: '260px'}}  />
                              <br/>
                          </div>
                      </div>
                    <br/>
                    <button className="green_button">Save</button>
                    <button id="setup ">Setup NMI</button>
                </div>
        </div>
      );
    }
  }
  {/* <Link to={this.props.NMILink}>NMI Setup</Link> */}


export default AddBusiness;