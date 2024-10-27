import React, { useState } from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import DeleteNote from "./DeleteNote";
const Note = () => {
  const [isDeleteModel, setIsDeleteModel] = useState(false);

const deleteNote = ()=>{
  // console.log('called');
  setIsDeleteModel(false);
}
const editNote=()=>{
  setIsDeleteModel(false);
}

  return (
    <>
      <div className="note ">
        <p className="text-muted">Note 1</p>
        <h5 className="text-dark">Website Design</h5>
        <p className="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
          quibusdam?
        </p>
        <p className="text-dark">2/3/2024</p>

        {/* <div className="noteBottom position-absolute" style={{ bottom: "3%" }}>
          <p className="text-muted">2/3/2024</p>
        </div> */}

        <div
          className="flex items-center gap-1"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <img
            className="img-fluid"
            style={{ width: "30px", height: "30px" }}
            src={editIcon}
            alt="Edit"
          />
          <img
            className="img-fluid"
            style={{ width: "30px", height: "30px" }}
            onClick={() => setIsDeleteModel(true)}
            src={deleteIcon}
            alt="Delete"
          />
        </div>
      </div>
      {isDeleteModel ? (
        <>
          <div className="deleteNoteModalCon d-flex align-items-center justify-content-center flex-column position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-10" style={{ zIndex: 100 }}>
  <div className="deleteNoteModalBody position-relative p-3 w-30 h-20 bg-white rounded shadow-lg " style={{height:'200px', padding:'10px'}}>
    <h3 className="fs-4">
      Delete Note “<span className="text-primary">Web Design</span>”
    </h3>
    <p className="m-0 text-muted fs-6">
      Do You want To Delete This Note <br /> Yes / No
    </p>

    <div className="d-flex align-items-center gap-2 position-absolute bottom-0  p-2" style={{width:'300px'}} >
      <button  onClick={() => deleteNote()}  className="delete w-50 p-2 btn btn-danger">Yes</button>
      <button onClick={() => editNote()}  className="cancel w-50 p-2 btn btn-primary">No</button>
    </div>
  </div>
</div>

        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Note;
