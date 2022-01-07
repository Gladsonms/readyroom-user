import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TopNav.css";
import { SearchOutlined, MenuFoldOutlined } from "@ant-design/icons";
function TopNav({ iconShow }) {
  const [showLinks, setshowLinks] = useState(true);
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
          {iconShow && (
            <Link to="/login" className="navLink">
              Login
            </Link>
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
