import React from "react";
import "./Signup.css";
function Signup() {
  return (
    // <div className="form-content-right">
    //   <div className="form">
    //     <h1>Create Your account filling out the information below</h1>
    //     {/* Username */}
    //     <div className="form-inputs">
    //       <label htmlFor="username" className="form-label">
    //         Useraname
    //       </label>
    //       <input
    //         type="text"
    //         id="username"
    //         className="form-input"
    //         name="username"
    //         placeholder="Enter Your username.."
    //       />
    //     </div>
    //     {/* Email address */}
    //     <div className="form-inputs">
    //       <label htmlFor="email" className="form-label">
    //         Email
    //       </label>
    //       <input
    //         type="email"
    //         id="email"
    //         className="form-input"
    //         name="email"
    //         placeholder="Enter Your  email.."
    //       />
    //     </div>
    //     {/* Phone  number */}
    //     <div className="form-inputs">
    //       <label htmlFor="email" className="form-label">
    //         Phone Number
    //       </label>
    //       <input
    //         type="number"
    //         id="phonenumber"
    //         className="form-input"
    //         name="phonenumber"
    //         placeholder="Enter Your  phone number.."
    //       />
    //     </div>
    //     {/* Password */}
    //     <div className="form-inputs">
    //       <label htmlFor="password" className="form-label">
    //         password
    //       </label>
    //       <input
    //         type="password"
    //         id="password"
    //         className="form-input"
    //         name="password"
    //         placeholder="Enter Your  password"
    //       />
    //     </div>
    //     {/*Confirm Password */}
    //     <div className="form-inputs">
    //       <label htmlFor="confirmpassword" className="form-label">
    //         password
    //       </label>
    //       <input
    //         type="password"
    //         id="confirmpassword"
    //         className="form-input"
    //         name="confirmpassword"
    //         placeholder="Enter Your  password again"
    //       />
    //     </div>
    //     {/* submit button */}
    //     <button className="form-input-btn" type="submit">
    //       Signup
    //     </button>
    //     <span className="input-form-login">
    //       Already have an account Login <a href="">Here</a>
    //     </span>
    //   </div>
    // </div>
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
                  <div className="signin">Alreday have an account.Login?</div>
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
