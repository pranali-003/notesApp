import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import deleteIcon from "../assets/delete.png";
import editIcon from "../assets/edit.png";

const SingleNote = () => {
  const [isDeleteModel, setIsDeleteModel] = useState(false);
  const editNote = () => {
    console.log("called");
    setIsDeleteModel(false);
  };

  return (
    <>
      <Navbar />
      <div
        className="container px-5 w-100 min-vh-68 mb-0"
        style={{ height: "auto" }}
      >
        <div
          className="d-flex align-items-start justify-content-between my-3"
          style={{ height: "auto" }}
        >
          <div className="left w-80 h-100">
            <h3
              className="m-0 p-0 display-5 text-dark text-truncate"
              style={{ minWidth: "90%" }}
            >
              note title
            </h3>
            <p className="text-muted">23 march 2025</p>
          </div>
          <div className="right d-flex align-items-start gap-1 w-20 h-100 justify-content-end">
            <img
              className="w-30 h-30 cursor-pointer"
              src={deleteIcon}
              alt="delete"
              style={{ width: "30px", height: "30px", cursor: "pointer" }}
              onClick={() => setIsDeleteModel(true)}
            />
            <img
              className="w-35 h-35 cursor-pointer"
              src={editIcon}
              alt="edit"
              style={{ width: "35px", height: "35px", cursor: "pointer" }}
              onClick={() => editNote()}
            />
          </div>
        </div>

        <p className="text-muted">note description</p>
        <div className="my-3 w-100">
          {/* {parse(data ? data.content : "")} */}
          <p>content</p>
        </div>
      </div>

      {isDeleteModel ? (
        <>
          <div
            className="deleteNoteModalCon d-flex align-items-center justify-content-center flex-column position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-10"
            style={{ zIndex: 100 }}
          >
            <div
              className="deleteNoteModalBody position-relative p-3"
              style={{
                width: "30vw",
                height: "20vh",
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 className="fs-5">
                Delete Note “<span className="text-primary">Web Design</span>”
              </h3>
              <p className="m-0 text-muted fs-6">
                Do You want to delete this note? <br /> Yes / No
              </p>

              <div
                className="d-flex align-items-center gap-2 position-absolute"
                style={{ bottom: "5%", width: "100%" }}
              >
                <button
                  onClick={() => deleteNote()}
                  className="delete w-50 p-2 btn btn-danger"
                >
                  Delete
                </button>
                <button
                  onClick={() => setIsDeleteModel(false)}
                  className="cancel w-50 p-2 btn btn-primary"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}

      <Footer />
    </>
  );
};

export default SingleNote;
