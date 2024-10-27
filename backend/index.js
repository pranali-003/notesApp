const express = require('express')
const app = express()
const connectDB = require('../backend/config/db')
const cors = require('cors');


// Middleware to parse JSON request body
app.use(express.json());

app.use(cors());
const PORT = 4000;
app.listen(PORT, (req,res)=>{
  console.log(`app running on port ${PORT}`);
  
})
app.get('/', (req,res)=>{
  res.send("connected");
})

app.use('/', require('./routes/userUrl'));
app.use('/', require('./routes/notesUrl'));

connectDB();