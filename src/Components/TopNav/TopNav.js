import { Link } from "react-router-dom";

const TopNav = () => (
  <div className="nav bg-dark d-flex justify-content-between">
    <Link className="nav-link" to="/">
      Home
    </Link>
    <Link className="nav-link" to="/login">
      Login
    </Link>
    <Link className="nav-link" to="/booking">
      Booking
    </Link>
  </div>
);

export default TopNav;
