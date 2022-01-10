import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

import { userRegister } from "../..//actions/auth";

function Signup() {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(username, email, password, confirmPassword, phone);

    try {
      const res = await userRegister({
        username,
        email,
        phone,
        password,
      });

      toast.success("Register sucess.Please Login");
      navigate("/login");
    } catch (error) {
      if (error.response.status == 400) {
        const { message } = error.response.data;
        toast.error(message);
      }
    }
  };
  return (
    <div className="outer-div">
      <div className="global-container">
        <div className="card login-form">
          <div className="card-body">
            <h1 className="card-title text-center">Signup</h1>
            <div className="card-text">
              <form onSubmit={handleSubmit}>
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
                    value={username}
                    onChange={(e) => {
                      setusername(e.target.value);
                    }}
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
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                {/* password */}
                <div className="form-group">
                  <label for="exampleInputpassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-sm"
                    name="password"
                    placeholder="Enter Your password.."
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                {/*confirm  password */}
                <div className="form-group">
                  <label for="exampleInputpassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-sm"
                    name="password"
                    placeholder="Enter Your password again.."
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                  <button
                    disabled={
                      !username ||
                      !email ||
                      !password ||
                      !confirmPassword ||
                      !phone
                    }
                    type="submit"
                    className="btn btn-primary btn-block"
                  >
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
