const User = require('../models/user.model'); // The User model from the above schema
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User registration controller
const registerUser = async (req, res) => {
  const { username, name, email, password } = req.body;

  try {
    // Check if the user with email or username already exists
    let userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: 'Username already taken' });
    }

    // Create a new user instance
    const newUser = new User({
      username,
      name,
      email,
      password,
      
    });

    // Save the user
    await newUser.save();

    // Generate JWT token for authentication
    const token = jwt.sign(
      { id: newUser._id, username: newUser.username },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // Send response with token and user info
    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        // profilePic: newUser.profilePic
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


const getUserInfo = async(req,res)=>{
  try{
    const user = await User.find({});
    res.status(200).json(user);
    console.log('user found');
  }catch(error){
    res.status(404).json({message:'user not found'})
  }
}


const getUserById = async(req,res)=>{
  try{
    const {id} = req.params;
    const user = await User.findById(id);
    if(!user){
      return res.send(404).json({message: "User not found!"});
    }
    res.json(user);
    console.log(`user found with id : ${id}`);
  }catch(error){
    res.send(500).json({message:error.message})
  }
}


//// user login 
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User does not exist.' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    // If login is successful, return user info or token (JWT)
    res.status(200).json({ 
      message: 'Login successful!', 
      user: {
        username: user.username,
        email: user.email,
        name: user.name,
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error.' });
  }
};

const updateUser = async(req,res)=>{
  try{
    const {id}  = req.params;
    const user  = await User.findByIdAndUpdate(id,req.body);
    if(!user){
      return res.status(404).json({message:'user not found'});
    }
    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  }catch(error){
    res.send(500).json({message: error.message});
  }
}

const deleteUser = async(req,res)=>{
  try{
    const {id} = req.params;
    const user = await User.findByIdAndDelete(id);
    if(!user){
      return res.status(404).json({message: 'User not found!'});
    }
    res.json({message:'User deleted Suucessfully !'});
  }catch(error){
    res.status(500).json({message: error.message});
  }
}


module.exports ={
  registerUser,
  getUserInfo,
  getUserById,
  updateUser,
  deleteUser,
  loginUser
}