import React, { useState, useRef, useMemo } from 'react';
import Navbar from '../components/Navbar'
import CheckBox from '../tools/CheckBox'
import JoditEditor from 'jodit-react';
import Footer from '../components/Footer'

const AddNote = () => {

    const editor = useRef(null);
	const [content, setContent] = useState('');
    
    const [isImportant, setIsImportant] = useState(false);

  return (
<>
  <Navbar />
  <div className="addNoteCon min-vh-100 px-4" style={{ paddingLeft: '50px', paddingRight: '50px' }}>
    <form className="my-5">
      <h3 className="m-0 p-0 mb-4 h3">Create A New Note</h3>

      <div className="form-group mb-3">
        <label htmlFor="title" className="form-label">Enter A Note Title</label>
        <input
          type="text"
          placeholder="Note Title"
          className="form-control mt-1"
          style={{ border: '2px solid #555' }}
          name="title"
          id="title"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="description" className="form-label">Enter A Note Description</label>
        <textarea
          placeholder="Note Description"
          className="form-control mt-1"
          style={{ border: '2px solid #555', minHeight: '100px' }}
          name="description"
          id="description"
        ></textarea>
       
      </div>
      <CheckBox  title="is Important" check={isImportant} setCheck={setIsImportant}/>
      <JoditEditor
			ref={editor}
			value={content}
			tabIndex={1} // tabIndex of textarea
			onChange={newContent => setContent(newContent)}
		/>
       
      <button className="btn btn-primary my-3" style={{ minWidth: '200px' }} type="submit">Add Note</button>
    </form>
    <Footer/>
  </div>
</>

  )
}

export default AddNote
