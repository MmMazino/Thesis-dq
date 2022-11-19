import React, { useEffect } from "react";
import job from "../img/jobmobile.png";
import star from "../img/starbook.png";

const Story10_5 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
      document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>
        แต่จ๊อบก็เป็นคนที่ชอบไปกรอกข้อมูลเพื่อจะเอารางวัล
        <br />
        และของตอบแทนต่างๆ
      </p>
      <div className="imgst mx-auto d-flex justify-content-center align-items-center mt-5">
        <div className="position-relative">
          <img src={job} className="bounce-top opa mt-2 mx-2" />
          <p className="heartbeat thoughtleft posthoughtJob2">
            มี Gift Voucher แจกด้วย
          </p>
        </div>
        <div className="position-relative">
          <img src={star} className="heartbeat my-2 mx-2" />
        </div>
      </div>
    </div>
  );
};

export default Story10_5;
