import React, { useState } from "react";
import "./TopNav.css";
import { SearchOutlined, MenuFoldOutlined } from "@ant-design/icons";
function TopNav() {
  const [showLinks, setshowLinks] = useState(true);
  return (
    <div className="navbar">
      <div className="leftside">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a to="/">Home</a>
          <a to="/">Hotels</a>
          <a to="/booking">Booking</a>
          <a to="/login">Login</a>
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
