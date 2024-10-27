import React from 'react'
import { useNavigate } from 'react-router-dom'
// import image from '../assets/image.png'
const Oops = ({image,title,buttonTitle,buttonLink}) => {

  let navigate = useNavigate();

  return (
    <>
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minWidth: "90vw", minHeight: "60vh" }}>
      <img src={image} alt="Oops" />
      <h3 className="fs-5 my-2">{title}</h3>
      <button onClick={()=>navigate(buttonLink)} className="btn btn-primary">{buttonTitle}</button>
    </div>
  </>
  
  )
}

export default Oops