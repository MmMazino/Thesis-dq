import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenus } from "@fortawesome/free-solid-svg-icons";
import { faMars } from "@fortawesome/free-solid-svg-icons";
import male from "../img/male.png";
import female from "../img/female.png";

const Gender = ({ handleChoose1, handleChoose2 }) => {
  return (
    <div className="container">
      <div className="formbox fadein col-md-10 col-xl-7 mx-auto">
        <p className="text-center genh1">แล้วเพศของคุณล่ะ ?</p>
        <div className="d-flex justify-content-center btpading">
          <div className="btnGender d-flex justify-content-center align-items-center mx-auto male" onClick={handleChoose1} >
            <img src={male} className="maleimg" />
          </div>
          <div className="btnGender d-flex justify-content-center align-items-center mx-auto female" onClick={handleChoose2} >
            <img src={female} className="femaleimg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gender;
