import React, { useEffect } from "react";
import mark from "../img/markmobile.png";
import google from "../img/searchinfo.png";

const Story4_2 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
      document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>มาร์คเลยไปหาข้อมูลโดยมีแหล่งอ้างอิงที่น่าเชื่อถืออยู่เสมอ</p>
      <div className="imgst mx-auto d-flex justify-content-center">
        <div className="position-relative mx-2 mt-4">
          <img src={mark} className="bounce-top mt-2" />
          <p className="heartbeat thoughtleft posthoughtMark4_2">
            หาข้อมูลจากเว็บนี้ดีกว่า
          </p>
        </div>
        <img src={google} className="my-2 heartbeat"  />
      </div>
    </div>
  );
};

export default Story4_2;
