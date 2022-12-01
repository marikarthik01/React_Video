import React from 'react'
import VideoBg from './videobg.mp4'
import '../App.css'



const Main = () => {
  return (
    <div className="main">
       <video src={VideoBg} autoPlay loop muted ></video>
    
    </div>
  );
}

export default Main;
