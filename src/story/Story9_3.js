import React, { useEffect } from "react";
import headelon from "../img/headelon.png";
import member from "../img/member.png";
import chat from "../img/chatmobile.png";

const Story9_3 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
      document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-7">
      <p>
        แต่ “อีลอน” เป็นคนที่ไม่ชอบการเปลี่ยนแปลง
        ก็เลยชอบให้คนอื่นใช้แอปที่ตัวเองถนัด
        ในการทำงานพูดคุยต่างๆ อยู่เสมอ
        <br/>ไม่ว่าจะตอนเร่งรีบมากแค่ไหนก็ตาม<br/>แต่ก็ใช้คำที่สุภาพพูดคุยกับเพื่อนร่วมงานเสมอ
      </p>
      <div className="mx-auto d-flex justify-content-center align-items-center">
        <div className="position-relative mx-2">
          <img src={chat} className="postimg2" />
          <img
            src={member}
            className="position-absolute rounded-circle posheadmember markanimate"
          />
          <p className="position-absolute bg-white poschatmember markanimate">
            เราใช้ Sluck <br />
            คุยงาน<br/>ดีมั้ยคะ
          </p>
          <img
            src={headelon}
            className="position-absolute rounded-circle posheadmember2 opa"
          />
          <p className="position-absolute bg-white poschatmember2 opa">ใช้ Lune คุยอย่างเดียว<br/>นะครับ
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story9_3;
