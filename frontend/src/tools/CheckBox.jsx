import React,{useEffect} from "react";

const CheckBox = ({check,setCheck,title}) => {

  const toggleCheckBox = ()=>{
    setCheck(!check);
  }
  // useEffect(() => {
  //   let checkBox = document.querySelector('.checkBox');
  //   check ? checkBox.classList.add("active") : checkBox.classList.remove("active"); //if check is true add active class to checkbox else remove it
  // }, [check])


  return (
    <>
      <div className="d-flex align-items-center gap-2 mb-3">
        <div onClick={toggleCheckBox} className="checkBox"
         style={{width: '20px',
          height: '20px', 
          backgroundColor: check ? '#578DF5': 'gray', 
          cursor: 'pointer'}}></div>
        <p className="mb-0">{title}</p>
      </div>

    </>
  );
};

export default CheckBox;
