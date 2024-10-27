import React,{useState} from "react";
import { Link , useNavigate} from "react-router-dom";
const Login = () => {

  const [user,setUser] = useState({
    email :"",
    password: ""
  });

  let navigate = useNavigate();

  const handleInputChange=(e)=>{
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user, [name]: value,
    });
    
};

const handleSubmit = async (e)=>{
  try{
    e.preventDefault();
  console.log(user);

  let response = await fetch(`http://localhost:4000/user/login`,{
    mode :"cors",
    method :"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body : JSON.stringify(user)

  });
  let data =await response.json();
  console.log(data);
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  console.log('User Logged In:', data);
  navigate("/profile");
  }

  catch(error){
    console.log('error loggin in ', error);
  }
}

  return (
    <>
      <div className="container bg-light d-flex flex-column align-items-center justify-content-center min-vh-100">
        <form action="" className="form w-50 p-4 shadow rounded bg-white">
          <h3 className="text-center mb-4 mt-2">Login</h3>

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

          <button onClick={handleSubmit} className="btn btn-primary btn-block mt-3 mb-3">Login</button>

          <p className="text-center mb-2">
            Don't Have An Account?{" "}
            <Link to="/signUp" className="text-primary">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
