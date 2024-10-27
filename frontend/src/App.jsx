import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import SearchPage from './pages/SearchPage'
import ProfilePage from './pages/ProfilePage'
import AddNote from './pages/AddNote'
import SingleNote from './pages/SingleNote'
// import ErrorBoundary from './ErrorBoundary'; 


const App = () => {
  return (
    <>
      {/* <ErrorBoundary> */}
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/search' element={<SearchPage/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
        <Route path='/addNewNote' element={<AddNote/>}></Route>
        <Route path='/singleNote' element={<SingleNote/>}></Route>
        {/* <Route path='/singleNote' element={<SingleNote/>}></Route> */}

        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
     </Router>
     {/* </ErrorBoundary> */}
    </>
  )
}

export default App
