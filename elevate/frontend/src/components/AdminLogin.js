import React, { Component } from 'react';

class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: "",
          remeberMe: false,
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        // handle logging in
    }

    onChange = (e, inputName) => {
        this.setState({
            [inputName]: e.target.value,
        });
    }

    toggleCheckbox = (e) => {
        this.setState({
            remeberMe: !this.state.remeberMe,
        });
    }

    render() {
      return (
        <section class="login-page row justify-content-center align-items-center">
            <form class="login-container col-6" onSubmit={this.onSubmit}>
                <h1>Elevate</h1>
                <h2>Admin</h2>
                <div class="row justify-content-center">
                    <div class="under-input-container">
                        <input type="text" placeholder="Username" onChange={(e) => {this.onChange(e, "username")}} value={this.state.username} required/>
                        <input type="password" placeholder="Password" onChange={(e) => {this.onChange(e, "password")}} value={this.state.password} required/>
                        <label><input type="checkbox" checked={this.state.remeberMe} onClick={this.toggleCheckbox} /> Remember Me </label>
                        <a href="#">Forgot Password</a>
                    </div>
                </div>
                
                <button class="purple" type="submit">Login</button>
            </form>
        </section>
      );
    }
  }

export default AdminLogin;







