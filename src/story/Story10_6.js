import React, { useEffect } from "react";
import job from "../img/jobmobile.png";
import mobile from "../img/lockmobile.png";

const Story10_6 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
      document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-12">
      <p>จนทำให้ชอบมีอีเมลโฆษณาส่งมาหาและให้เข้าไปในเว็บไซต์ต่างๆ</p>
      <div className="imgst mx-auto d-flex justify-content-center align-items-center mt-5">
        <div className="position-relative ">
          <img src={job} className="bounce-top opa mx-2" />
          <p className="heartbeat thoughtleft posthoughtJob">
            ทำไมมีแต่อีเมลประกันส่งมา
          </p>
        </div>
        <div className="position-relative">
          <img src={mobile} className="my-2 mx-2" />
          <p className="posemail markanimate">Email:ประกันสุขภาพAOA<br/>สมัครฟรีวันนี้</p>
        </div>
      </div>
    </div>
  );
};

export default Story10_6;
