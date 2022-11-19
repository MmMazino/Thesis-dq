import React, { useState } from "react";
import arjan from "./img/arjan.jpg";
import tae from "./img/tae.jpg";
import gus from "./img/jame.jpg";
import maggie from "./img/maggie.jpg";
import bg from "./bg.mp4";
import { Link, Routes, Route } from "react-router-dom";
import UserForm from "./UserForm";

const Aboutus = () => {
  const [showlink2, setshowlink2] = useState(false);
  const onClick = () => setshowlink2(true);
  const LinkHome = () => (
    <div>
      <nav>
        <Link to="/" className="position-absolute poshome" onClick={onClick}>
          <h5 className="aboutuslink">Home</h5>
        </Link>
      </nav>
    </div>
  );
  return (
    <div>
      { showlink2 ? null : <LinkHome />  }
      <Routes>
        <Route exact path="/home" element={<UserForm />}></Route>
      </Routes>
      <video className="videobg" autoPlay loop muted>
        <source src={bg} type="video/mp4" />
      </video>
      <div className="content d-flex justify-content-center align-items-center">
        <div className="container fadein">
          <h1 className="text-center mb-5 aboutustitle">About us</h1>
          <div className="row">
            <div className="col text-center">
              <img src={arjan} className="imgaboutus mb-2" />
              <h3 className="aboutush1">Dr.Kridsanapong Lertbumroongchai</h3>
            </div>
          </div>
          <div className="row mt-2 mt-md-5">
            <div className="col-12 col-md-4 text-center">
              <img src={tae} className="imgaboutus mb-2" />
              <h3 className="aboutush1">Thanapong Nitinon</h3>
            </div>
            <div className="col-12 col-md-4 text-center">
              <img src={gus} className="imgaboutus mb-2" />
              <h3 className="aboutush1">Gemrattakhet Chalermthongchai</h3>
            </div>
            <div className="col-12 col-md-4 text-center">
              <img src={maggie} className="imgaboutus mb-2" />
              <h3 className="aboutush1">Thanapit Srisupa</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
