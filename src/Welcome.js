import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Aboutus from "./Aboutus";
import bg from "./bg.mp4";
import UserForm from "./UserForm";

const Welcome = ({handleNext}) => {
  return (
    <div className="welcome">
      <h1 className="welcome" onClick={handleNext}>On the way</h1>
    </div>
  );
};

export default Welcome;
