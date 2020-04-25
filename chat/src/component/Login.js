import React, { Component } from "react";
import "../css/App.css";
import { NavLink } from "react-router-dom";

class LoginPage extends Component {
  constructor() {
    super();
    this.submitHandler = this.submitHandler.bind(this);
  }
  submitHandler(e) {
    if (this.props.username.trim().length > 0)
      this.props.updateCurrentPage("Chat");
    else return false;
  }
/** ****Notes***** If account name exist and no-one login with that account. -- Get stage from --
 * If account name not exist in DB --Create new isJoinGroupList with all element false. --
 * If account name exist but someone login with that name -- Reject new login with that name. --
 */
  render() {
    return (
      <div className="app">
        <div className="font-header login_container">
          <h1 className="t1">Stay home</h1>
          <h4> #อยู่บ้านช่วยชาติ </h4>
          <br />
          <form className= "font-fill"onSubmit={this.submitHandler}>
            <input
              type="text"
              className="form-control"
              placeholder=".......Fill Your Name..."
              id="nameField"
              onChange={e => {
                this.props.updateUsername(e.target.value);
              }}
            />
          </form>
          <br></br>
          <div>
            <NavLink to="/ChatRoom1">
              <button
                disabled={!this.props.username.trim().length > 0}
                className="btn btn-secondary"
                type="submit"
                onClick={e => {
                  this.props.updateCurrentPage("Chat");
                  console.log(this.props.username)
                  this.props.SocketEmit('enter',this.props.username)
                }}
              >
                Enter
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginPage;