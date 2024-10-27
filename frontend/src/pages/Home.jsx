import React from "react";
import Navbar from "../components/Navbar";
import Note from '../components/Note'
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mt-3 d-flex align-items-center justify-content-between w-100 px-4">
        <h1 className="h4">Hi, Pranali!</h1>

        <div className="input-group" style={{ width: "380px" }}>
          <input 
            type="text"
            placeholder="Search Notes"
            className="form-control"
            style={{ padding: "11px" }}
          />
        </div>
      </div>
      <div className="gridItems">
        <Note />
        <Note /> 
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
      <Footer/>
    </>
  );
};

export default Home;
