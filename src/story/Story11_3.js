import React, { useEffect } from "react";
import job from "../img/jobmobile.png";
import share from "../img/shareinfo.png";

const Story11_3 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
      document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-12">
      <p>หรือบางทีเราไปเจอความรู้ต่างๆ เราก็แชร์ไปให้เพื่อนๆ เหมือนกัน</p>
      <div className="imgst mx-auto d-flex justify-content-center align-items-center mt-5">
        <div className="position-relative">
          <img src={job} className="bounce-top opa mt-2 mx-2" />
          <p className="heartbeat thoughtleft posthoughtJob3">
            ข้อมูลนี้แชร์ให้เพื่อนดีกว่า
          </p>
        </div>
        <div className="position-relative">
          <img src={share} className="my-2 mx-2 heartbeat" />
        </div>
      </div>
    </div>
  );
};

export default Story11_3;
