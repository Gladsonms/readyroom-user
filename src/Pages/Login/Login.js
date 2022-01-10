import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { userLogin } from "../../actions/auth";

function Login() {
  const [email, setemail] = useState("g@g.g");
  const [password, setpassword] = useState("1234");

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await userLogin({
        email,
        password,
      });
      //save user in redux store and also in local storage the redirect to home page
      if (res.data) {
        console.log(res.data);
        window.localStorage.setItem("userdata", JSON.stringify(res.data));
        dispatch({
          type: "LOGGED_IN_USER",
          payload: res.data,
        });
        navigate("/");
      }
    } catch (error) {
      if (error.response.status == 400) {
        const { message } = error.response.data;
        toast.error(message);
      }
      if (error.response.status == 401) {
        const { message } = error.response.data;
        toast.error(message);
      }
    }
  };
  return (
    <>
      {/* <TopNav iconShow={false} /> */}
      <div className="outer-div">
        <div className="global-container">
          <div className="card login-form">
            <div className="card-body">
              <h1 className="card-title text-center">Login</h1>
              <div className="card-text">
                <form onSubmit={handleSubmit}>
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
                      value={email}
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
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
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <button
                      disabled={!email || !password}
                      type="submit"
                      className="btn btn-primary btn-block"
                    >
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
