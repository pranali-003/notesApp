import React from "react";
import Note from "../components/Note";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div
        className="d-flex align-items-center justify-content-between w-100"
        style={{height: '300px', padding:"0 50px"}}
      >
        <div className="d-flex align-items-center gap-2">
          <div
            className="profileCircle rounded-circle bg-secondary"
            style={{width: '150px', height: '150px'}}
          ></div>
          <div>
            <h3 className="h3" style={{ fontSize: '23px'}}>
              Pranali Nage
            </h3>
            <p className="text-muted m-0" style={{fontSize: '15px'}}>
              Joined In 23 March 2025
            </p>
          </div>
        </div>

        <div className="position-relative" style={{height: '40%'}}>
          <div className="d-flex align-items-center gap-2 text-muted">
            <span>Total Notes 5
            Important Notes 3</span>
          </div>
          <div className="position-absolute bottom-0 d-flex align-items-center gap-2">
            <button className="btn btn-primary">Add Pic</button>
            <button className="btn btn-primary">Add Note</button>
          </div>
        </div>
      </div>

      <div className="w-100" style={{padding: '0 50px'}}>
        <h3 className="h3" style={{fontSize: '26px'}}>
          Your <span style={{color: '#578df5'}}>Important</span> Notes 
        </h3>
      </div>

      <div className="row gridItems">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>

      <div className="w-100 mt-4" style={{padding: '0 50px'}}>
        <h3 className="h3" style={{fontSize: '26px'}}>
          Your <span style={{color:'#578df5'}}>Normal</span> Notes
        </h3>
      </div>

      <div className="row mb-3 gridItems">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>

      <Footer />
    </>
  );
};

export default Profile;
