import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Note from "../components/Note";
import Oops from '../components/Oops'
import oopsImage from '../assets/oops.jpeg'

const SearchPage = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex align-items-center justify-content-end pt-4 pe-5">
        <div className="inputBox" style={{width: '400px', padding: '5px'}}>
          <input type="text" className="form-control" placeholder="Search Notes" />
        </div>
      </div>
      <div className="gridItems">
      {/* <Note />
      <Note /> */}
      {/* <Note />
      <Note />
      <Note />
      <Note />
      <Note /> */}
      </div>
      <Oops image={oopsImage} title="No Search Results Found for 'Graphics'"  buttonTitle="Go Back" buttonLink="/"/>
      <Footer />
    </>
  );
};

export default SearchPage;
