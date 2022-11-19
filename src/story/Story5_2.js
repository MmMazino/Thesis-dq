import React,{useEffect} from "react";
import gate from "../img/gate.png";

const Story5_2 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
    document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>แต่ก็มีคนที่ชื่อ “เกตส์” เป็นคนที่ไม่ค่อยมีเพื่อน</p>
      <div className="imgst mx-auto d-flex justify-content-center">
        <div className="position-relative mx-2 mt-4">
          <img src={gate} className="vibrate-1" />
          <p className="heartbeat thoughtleft posthoughtGate5_2">
            ไม่ค่อยมีเพื่อนเลย
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story5_2;
