import React, { useEffect } from "react";
import tim from "../img/tim.png";
import adobo from "../img/adobo.png";

const Story12_3 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
      document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>
        แล้วก็มี ”ทิม” ที่จำเป็นต้องใช้โปรแกรมคอมพิวเตอร์
        <br />
        ที่ต้องเสียค่าใช้จ่าย
      </p>
      <div className="imgst mx-auto d-flex justify-content-center align-items-center mt-5">
        <div className="position-relative">
          <img src={tim} className="bounce-top opa mt-2 mx-2" />
          <p className="heartbeat thoughtleft posthoughtJob4">
            ราคาโปรแกรมแพงจัง
          </p>
        </div>
        <div className="position-relative">
          <img src={adobo} className="my-2 mx-2 heartbeat" />
        </div>
      </div>
    </div>
  );
};

export default Story12_3;
