import React from "react";
import "./Login.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formSubmit = e => {
    e.preventDefault();
    localStorage.setItem("username", this.state.username);
    window.location.reload();
  };

  render() {
    return (
        <div className="login-pg">
            <div className="IG-image">
                <img src="/images/InstagramMock.png" alt="logo" />
            </div>
      <div className="login-box">
        <img className="login-logo" alt="logo" src="/images/instagram.png" />
        <form className="login-form" onSubmit={this.formSubmit}>
          <input
            onChange={this.handleChange}
            name="username"
            type="text"
            placeholder="User Name"
            value={this.state.username}
          />
          <input
            onChange={this.handleChange}
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
          />
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
        <p>Get the App</p>
        <img className="app-store" src="/images/appStores.png" alt="App Store" />
      </div>
        </div>
    );
  }
}

export default Login;
