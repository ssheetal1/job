import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

 function HeroSection () {

   const onNavigateJobSearch = () => {
     console.log("onNavigateJobSearch");
   };

   const onNavigateJobPost = () => {
    console.log("onNavigateJobPost");
  };

   return (
     <div className="hero-container">
        <video src="/video/video-4.mp4" autoPlay loop muted />
        <h2> Are you looking for a job? </h2>
        <br/>
        <div className="hero-btns">
          <Button
            buttonRoute="jobSearch"
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            onClick={() => onNavigateJobSearch()}
            >
            APPLY
          </Button>
          <Button
            buttonRoute="jobPost"
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={() => onNavigateJobPost()}>
            POST
          </Button>
      </div>
     </div>
   );
 };

 export default HeroSection;
