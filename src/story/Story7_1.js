import React, { useEffect } from "react";
import gate from "../img/gatemobile.png";
import tander from "../img/tander.png";

const Story7_1 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
      document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>
        แต่ในการที่เกตส์สมัครแอปพลิเคชันหาคู่
        <br />
        ก็ต้องมีการสร้างรหัสและ ID ใหม่
      </p>
      <div className="imgst mx-auto d-flex justify-content-center align-items-center">
        <div className="position-relative mx-2 mt-4">
          <img src={gate} className="vibrate-1" />
          <p className="heartbeat thoughtleft posthoughtGate5_3">
            ตั้งง่ายๆ แบบนี้แหละ
          </p>
        </div>
        <div className="position-relative mx-2 mt-4">
          <img src={tander} className="heartbeat" />
        </div>
      </div>
    </div>
  );
};

export default Story7_1;
