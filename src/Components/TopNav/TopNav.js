import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

import "./TopNav.css";

function TopNav({ iconShow }) {
  const [showLinks, setshowLinks] = useState(true);
  const auth = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.localStorage.removeItem("userdata");
    navigate("/login");
  };
  return (
    <div className="navbar">
      <div className="leftside">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link to="/" className="navLink">
            Hotels
          </Link>
          <Link to="/booking" className="navLink">
            Booking
          </Link>

          {auth !== null && (
            <span className="navLink" id="logoutBtn" onClick={logout}>
              Logout
            </span>
          )}
          {auth === null && (
            <>
              {iconShow && (
                <Link to="/login" className="navLink">
                  Login
                </Link>
              )}
            </>
          )}
        </div>
        <button
          className="navButton"
          onClick={() => {
            setshowLinks(!showLinks);
          }}
        >
          <MenuFoldOutlined />
        </button>
      </div>
      <div className="rightSide">
        <input type="text" placeholder="Serach...." />
        <button>
          <SearchOutlined />
        </button>
      </div>
    </div>
  );
}

export default TopNav;
