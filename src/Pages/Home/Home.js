import React from "react";
import { useSelector } from "react-redux";
import TopNav from "../../Components/TopNav/TopNav";

function Home() {
  const { user } = useSelector((state) => ({ ...state }));
  return (
    <>
      <TopNav iconShow={true} />
      <div className="container-fluid h1 p-5 text-center">
        Homxxxxxxxxxe page{JSON.stringify(user)}
      </div>
    </>
  );
}

export default Home;
