import React, { useEffect } from "react";
import post from "../img/postangy.png";
import headelon from "../img/headelon.png";
import mark from "../img/markfake.png";

const Story8_3 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
      document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>
        และตอนที่มีคนอื่นมาโพสต์ขอคำแนะนำหรือขอกำลังใจ
        <br />
        อีลอนก็ให้คำแนะนำได้อย่างดีเยี่ยม
      </p>
      <div className="mx-auto d-flex justify-content-center align-items-center">
        <div className="position-relative mx-2 mt-2">
          <img src={post} className="postimg4" />
          <img src={headelon} className="position-absolute rounded-circle posheadelon markanimate"/>
          <p className="position-absolute bg-white poschatelon markanimate">ลองติดต่อ Service Support ดูครับ</p>
          <img src={mark} className="position-absolute rounded-circle posheadelon2 markanimate"/>
          <p className="position-absolute bg-white poschatelon2 markanimate">ไปดูที่ห้องพี่แทนก็ได้นะครับ</p>
        </div>
      </div>
    </div>
  );
};

export default Story8_3;
