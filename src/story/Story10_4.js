import React, { useEffect } from "react";
import job from "../img/jobmobile.png";
import thaijoe from "../img/thaijoe.png";

const Story10_4 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
      document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>
        จ๊อบจึงต้องหาข้อมูลจากแหล่งที่มาที่น่าเชื่อถือ
        <br />
        เพื่อให้งานวิจัยของจ๊อบมีความถูกต้องและน่าเชื่อถือ
      </p>
      <div className="imgst mx-auto d-flex justify-content-center align-items-center mt-5">
        <div className="position-relative">
          <img src={job} className="bounce-top opa mx-2" />
          <p className="heartbeat thoughtleft posthoughtJob">เข้าเว็บ ThaiJoe ดีกว่า</p>
        </div>
        <div className="position-relative">
        <img src={thaijoe} className="my-2 mx-2 heartbeat" />
        </div>
      </div>
    </div>
  );
};

export default Story10_4;
