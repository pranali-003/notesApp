import React from 'react';
import { FaYoutube } from "react-icons/fa";
import { ImFacebook2 } from 'react-icons/im';
import { RiInstagramFill } from 'react-icons/ri';
const Footer = () => {
  return (
    <>
      <div className="footer py-4 mt-5 w-100 px-5 bg-light d-flex justify-content-between align-items-center">
        <h3 className="h4">Manage Notes</h3>

        <div className="text-center text-muted">
          <p>Designed By <span className="text-primary">Pranali</span></p>
          <p>&copy; 2024 All Rights Reserved</p>
        </div>

        <div className="text-muted">
          <p className="font-weight-bold">We Are Social</p>
          <div className="d-flex align-items-center gap-2">
            {/* Add your social icons here */}
            
            <i className="p-2 bg-white text-dark cursor-pointer"><FaYoutube /></i>
            <i className="p-2 bg-white text-dark cursor-pointer"><RiInstagramFill /></i>
            <i className="p-2 bg-white text-dark cursor-pointer"><ImFacebook2 /></i>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
