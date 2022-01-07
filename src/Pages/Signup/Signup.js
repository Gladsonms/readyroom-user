import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="outer-div">
      <div className="global-container">
        <div className="card login-form">
          <div className="card-body">
            <h1 className="card-title text-center">Signup</h1>
            <div className="card-text">
              <form action="">
                <div className="form-group">
                  <label for="exampleInputuseranme" className="form-label">
                    Useraname
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="form-control form-control-sm"
                    name="username"
                    placeholder="Enter Your username.."
                  />
                </div>
                {/* Email */}
                <div className="form-group">
                  <label for="exampleInputEmail" className="form-label">
                    email
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="form-control form-control-sm"
                    name="email"
                    placeholder="Enter Your email.."
                  />
                </div>
                {/* Phone */}
                <div className="form-group">
                  <label for="exampleInputphone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="number"
                    id="phone"
                    className="form-control form-control-sm"
                    name="phone"
                    placeholder="Enter Your number.."
                  />
                </div>
                {/* password */}
                <div className="form-group">
                  <label for="exampleInputpassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="text"
                    id="password"
                    className="form-control form-control-sm"
                    name="password"
                    placeholder="Enter Your password.."
                  />
                </div>
                {/*confirm  password */}
                <div className="form-group">
                  <label for="exampleInputpassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    id="password"
                    className="form-control form-control-sm"
                    name="password"
                    placeholder="Enter Your password again.."
                  />
                  <button type="submit" className="btn btn-primary btn-block">
                    Signup
                  </button>
                  <div className="signin">
                    Alreday have an account
                    <Link className="login-user" to="/login">
                      Login
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
