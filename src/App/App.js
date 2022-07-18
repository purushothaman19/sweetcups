import './App.css';
import HomePage from '../components/Home/HomePage';
import "swiper/css/bundle";
import {  Routes, Route, Navigate} from "react-router-dom";
import Single from '../components/Home/SingleCake/Single';
import Admin from "../components/Admin/Admin";
import AdminDasboard from "../components/Admin/AdminDashboard";
import { useLocation } from 'react-router-dom';
import React from 'react';


function App() {

  const location = useLocation();
    const PrivateRoute = ({ children }) => {
    const isAuthenticated = window.sessionStorage.getItem('token') !== null ? true : false;
        
    if (isAuthenticated ) return children
    else return <Navigate to='/admin' state= {{from: location}} />
  }
  
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={ <Admin /> } />        
        
        <Route path="/dashboard" element={ <PrivateRoute><AdminDasboard /></PrivateRoute> } />
        
        <Route path="/cakes/:cakename"  element={<Single/>} />
        {/* <Route path="/cakes/:cakename"  element={<Single/>} /> */}
      </Routes>

    </div>
  );
}

export default App;
