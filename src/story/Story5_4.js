import React, { useEffect } from "react";
import gate from "../img/gatemobile.png";
import user from "../img/markfake.png";
import mobile from "../img/chatmobile.png";

const Story5_4 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
      document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>บางครั้งก็ถูกแกล้ง และถูกคนทักแชทมากวนอยู่บ่อยๆ</p>
      <div className="mx-auto d-flex justify-content-center">
        <div className="imgst position-relative mx-2 mt-4">
          <img src={gate} className="vibrate-1" />
          <p className="heartbeat thoughtleft posthoughtGate5_3">
            คนแชทอะไรมาก็ไม่รู้
          </p>
        </div>
        <div className="position-relative mx-2 mt-4">
          <img src={mobile} className="gatemobile" />
          <img src={user} className="position-absolute rounded-circle bg-white markanimate poschatimgmark1" />
          <p className="position-absolute poschatmark1 markanimate">ทักค้าบน้องสาว</p>
          <p className="position-absolute poschatmark2 markanimate">ชื่อไรค้าบบ</p>
          <p className="position-absolute poschatmark3 markanimate">จีบได้มั้ยค้าบบ</p>
        </div>
      </div>
    </div>
  );
};

export default Story5_4;
