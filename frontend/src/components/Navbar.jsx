import React from "react";

const Navbar = () => {
  return (
    <>
      <div
        className="navbar w-100 bg-light d-flex align-items-center justify-content-between px-4"
        style={{ height: "90px" }}
      >
        <div className="logo h3">Keep Notes</div>
        <div className="right d-flex align-items-center gap-3">
          <button className="btn btn-primary">Add Note</button>
          {/* <Avatar size="50" round="50%" style={{cursor:"pointer"}}/> */}
          <div className="profileCircle" style={{width: "40px", height: "40px", cursor: "pointer", borderRadius: "50%", backgroundColor: "#D9D9D9"}}></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
