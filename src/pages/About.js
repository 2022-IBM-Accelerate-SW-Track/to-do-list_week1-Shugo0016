import React, { Component } from 'react';
import "./About.css";
import kaya from "../assets/kaya.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
         <div>
    <div class="split left">
      <div className="centered">
        <img className="kaya" src={kaya} alt="Profile Pic"></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Kaya Erol</div>
        <div className="brief_description">
          I am a Computer Science Major at New York University.
        </div>
      </div>
    </div>
  </div>
 
      </div>
      
    )
  }
}