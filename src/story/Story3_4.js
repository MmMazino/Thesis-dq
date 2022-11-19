import React, { useEffect } from "react";
import mark from "../img/sadmark.png";
import fam from "../img/sadmom.png";

const Story3_4 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
      document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="col-xl-12 text-center fadein">
      <p>จนไม่สนใจคนรอบข้าง จนทำให้ความสัมพันธ์กับคนรอบข้างแย่ลง</p>
      <div className="imgst mx-auto d-flex justify-content-center mt-5">
        <div className="position-relative mx-2">
          <img src={mark} className="bounce-top opa mt-2" />
          <p className="heartbeat thoughtleft posthoughtMark3_4">แม่เอาแต่บ่นอยู่นั้นแหละ</p>
        </div>
        <div className="position-relative mx-2 mt-4">
          <img src={fam} className="bounce-top opa mt-2" />
          <p className="heartbeat thoughtright posthoughtFam">วันๆ เอาแต่เล่นโทรศัพท์<br/>ไม่ช่วยแม่ทำงานบ้านเลย</p>
        </div>
      </div>
    </div>
  );
};

export default Story3_4;
