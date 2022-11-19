import React,{useEffect} from "react";
import elon from "../img/elon.png";
import job from "../img/job.png";

const Story9_5 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
    document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>แต่ก็ใช้คำที่สุภาพพูดคุยกับเพื่อนร่วมงานเสมอ</p>
      <div className="imgst mx-auto d-flex justify-content-center align-items-center">
        <div className="mx-4">
          <img src={elon} className="vibrate-1" />
          <p className="mt-3 heartbeat comment px-4">ติดตรงไหนถามได้นะครับ</p>
        </div>
        <div className="mx-4">
          <img src={job} className="vibrate-1" />
          <p className="mt-3 heartbeat comment px-4">ได้เลยครับ</p>
        </div>
      </div>
    </div>
  );
};

export default Story9_5;
