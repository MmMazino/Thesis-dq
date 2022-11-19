import React, { useEffect } from "react";
import gate from "../img/gatemobile.png";
import headgate from "../img/headgate.png";
import chatmobile from "../img/chatmobile.png";

const Story7_2 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
      document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-12">
      <p>
        แต่เพื่อกันลืมรหัสผ่าน เกตส์ก็จะตั้งรหัสผ่านง่ายๆ และฝากให้เพื่อนจำไว้
      </p>
      <div className="mx-auto d-flex justify-content-center align-items-center">
        <div className="position-relative mx-2 mt-4 imgst">
          <img src={gate} className="vibrate-1" />
          <p className="heartbeat thoughtleft posthoughtGate5_3">
            ฝากเพื่อนไว้ดีกว่า
          </p>
        </div>
        <div className="position-relative mx-2 mt-4">
          <img src={chatmobile} className="gatemobile"/>
          <img src={headgate} className="position-absolute rounded-circle bg-white posheadgate markanimate"/>
          <p className="position-absolute bg-white poschatgate1 markanimate">ฝากรหัสหน่อย</p>
          <p className="position-absolute bg-white poschatgate2 markanimate">gate2000</p>
          <p className="position-absolute bg-white poschatgate3 markanimate">gate12345</p>
        </div>
      </div>
    </div>
  );
};

export default Story7_2;
