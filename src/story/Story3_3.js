import React, { useEffect } from "react";
import mark from "../img/markmobile.png";
import scoll from "../img/scoll.mp4";


const Story3_3 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
      document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="col-xl-6 text-center fadein">
      <p>
        แต่ มาร์ค เป็นคนที่ชอบไถโซเชียลมีเดียและดูซีรีส์<br/>ตลอดเวลา ทั้งเวลาทำงาน
        เวลาไปเที่ยวกับที่บ้าน
      </p>
      <div className="imgst mx-auto d-flex justify-content-center mt-5">
      <div className="position-relative">
          <img src={mark} className="bounce-top opa mt-2" />
          <p className="heartbeat thoughtleft postMarkscoll">เพลินจังทั้งวันยังไหว</p>
        </div>
        <div className="ml-2">
          <video src={scoll} loop autoPlay className="mobilescoll"/>
        </div>
      </div>
    </div>
  );
};

export default Story3_3;
