import React, { useEffect } from "react";
import mark from "../img/mark.png";
import bos from "../img/bos.png";

const Story4_1 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
      document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>
        และมาร์คก็เป็นคนที่ต้องทำงานตามบรีฟหน้างานอยู่บ่อยๆ
        เลยต้องหาวิธีแก้ไขปัญหาอยู่เรื่อยๆ
      </p>
      <div className="imgst mx-auto d-flex justify-content-center">
        <div className="imgst mx-auto d-flex justify-content-center mt-5">
          <div className="position-relative mx-2">
            <img src={bos} className="shake-left mt-2" />
            <p className="heartbeat chatleft posthoughtBos4_1">
              พี่ของานบรีฟตามนี้นะ
            </p>
          </div>
          <div className="position-relative mx-2 mt-4">
            <img src={mark} className="shake-right mt-2" />
            <p className="heartbeat chatright posthoughtMark4_1">ครับหัวหน้า</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story4_1;
