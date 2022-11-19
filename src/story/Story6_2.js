import React, { useEffect } from "react";
import gate from "../img/gate.png";
import fan from "../img/fangate.png";

const Story6_2 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
      document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>
        เกตส์ก็เป็นคนที่ใช้แอปฯหาคู่ด้วย และชอบออกไปเที่ยว
        <br />
        นัดเจอกับคนในแอปฯบ่อยๆ
      </p>
      <div className="imgst mx-auto d-flex justify-content-center mt-5">
        <div className="position-relative mx-2">
          <img src={gate} className="shake-left mt-2" />
          <p className="heartbeat chatleft posthoughtGate6_2">
            ตัวจริงหล่อกว่าในแชทนะคะ
          </p>
        </div>
        <div className="position-relative mx-2 mt-3">
          <img src={fan} className="shake-right mt-2" />
          <p className="heartbeat chatright posthoughtfanGate6_2">เกตส์ก็น่ารักเหมือนกัน</p>
        </div>
      </div>
    </div>
  );
};

export default Story6_2;
