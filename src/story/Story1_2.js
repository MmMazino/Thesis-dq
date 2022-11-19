import React, { useEffect } from "react";
import mark from "../img/mark.png";
import markfake from "../img/facebook.png";

const Story1_2 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
      document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="fadein col-xl-6 text-center">
      <p>
        แต่ก็มีเพื่อนคนหนึ่งที่ชื่อ “มาร์ค”
        <br />
        ที่ใช้ชื่อปลอม และรูปโปรไฟล์เป็นรูปตัวการ์ตูน
        <br />
        เพื่อไปหลอกคนอื่น สร้างความเดือดร้อนให้ผู้อื่น
      </p>
      <div className="imgst mx-auto d-flex justify-content-center align-items-center">
        <div className="position-relative">
          <img src={mark} className="bounce-top opa mt-2" />
          <p className="heartbeat thoughtleft posthoughtMark">มาร์คเองครับ</p>
        </div>
        <div className="ml-2">
          <img src={markfake} className="markanimate opa mt-5" />
        </div>
      </div>
    </div>
  );
};

export default Story1_2;
