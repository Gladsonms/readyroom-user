import React from "react";
import TopNav from "../../Components/TopNav/TopNav";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      {/* <TopNav iconShow={false} /> */}
      <div className="outer-div">
        <div className="global-container">
          <div className="card login-form">
            <div className="card-body">
              <h1 className="card-title text-center">Login</h1>
              <div className="card-text">
                <form action="">
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
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
                    </button>
                    <div className="signin">
                      Dont have an account
                      <Link className="login-user" to="/Signup">
                        Signup
                      </Link>
                    </div>
                    <div className="signin">
                      Login With Otp
                      <Link className="login-user" to="/Signup">
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
    </>
  );
}

export default Login;
