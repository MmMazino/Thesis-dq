import React, { useEffect } from "react";
import chat from "../img/chatmobile.png";
import user from "../img/user.png";
import banana from "../img/banana.png";

const Story6_3 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
      document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>จนครั้งล่าสุดมีคนคนหนึ่งมาแชทก่อกวน</p>
      <p>ส่งรูปโป๊และการกระทำอนาจารให้เกตส์ดู</p>
      <div className="mx-auto d-flex justify-content-center align-items-center">
        <div className="position-relative">
          <img src={chat} className="fadein opa postimg3" />
          <img
            src={user}
            className="position-absolute rounded-circle bg-white poschatanaimg1 markanimate"
          />
          <p className="position-absolute poschatana1 markanimate">
            คอลกันมั้ยค้าบบ
          </p>
          <img src={banana} className="postimg banana markanimate"/>
        </div>
      </div>
    </div>
  );
};

export default Story6_3;
