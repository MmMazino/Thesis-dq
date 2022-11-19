import React, { useEffect } from "react";
import job from "../img/jobst.png";

const Story10_3 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
      document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>และก็มี ”จ๊อบ” เป็นนักศึกษาปริญญาโทที่กำลังทำงานวิจัย</p>
      <div className="imgst mx-auto d-flex justify-content-center align-items-center">
        <div className="position-relative mt-5">
          <img src={job} className="bounce-top opa" />
          <p className="heartbeat thoughtleft posthoughtMark">จ๊อบเองครับ</p>
        </div>
      </div>
    </div>
  );
};

export default Story10_3;
