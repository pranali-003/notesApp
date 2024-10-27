import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";

const SignUp = () => {
  
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    name: "",
    email : "",
    password : "",
  });


  const handleInputChange = (e)=>{
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user, [name]: value,
    });
  };

const handleSubmit = async (e)=>{
  // prevent deafult nature of form in react
  e.preventDefault();
  // console.log(user);
  try{
    const response = await fetch("http://localhost:4000/user", {
      mode:"cors",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    console.log('User registered:', data);
    navigate("/login");

  }catch(error){
    console.log('register error', error);
  }

 
}

  return (
    <>
      <div className="container bg-light d-flex flex-column align-items-center justify-content-center min-vh-100">
        <form action="" className="form w-50 p-4 shadow rounded bg-white">
          <h3 className="text-center mb-4 mt-2">Sign Up</h3>

          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              name="username"
              id="username"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              id="name"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              id="email"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              id="password"
              required
              onChange={handleInputChange}
            />
          </div>

          <button onClick={handleSubmit} className="btn btn-primary btn-block mt-3 mb-3">
            Sign Up
          </button>

          <p className="text-center mb-2">
            Already Have An Account?{" "}
            <Link to="/login" className="text-primary" >
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
