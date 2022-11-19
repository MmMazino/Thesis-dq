import React,{useEffect} from "react";
import tim from "../img/tim.png";
import friend from "../img/friend2.png";

const Story12_6 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
    document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>และทิมยังเอาข้อมูลที่ผิดๆ ที่ตัวเองรู้มาไปเผยแพร่ที่ต่างๆ โดยอ้างชื่อคนอื่นทำให้เขาอาจจะเสียชื่อเสียง</p>
      <div className="imgst mx-auto d-flex justify-content-center align-items-center">
        <div className="position-relative">
          <img src={tim} className="bounce-top opa mt-5 mx-2" />
          <p className="heartbeat chatleft posJobchat">
            พี่อีลอนบอกว่า<br/>"การโหลดโปรแกรมเถื่อน<br/>มันไม่ผิดกฎหมายหรอก"
          </p>
        </div>
        <div className="position-relative mt-1">
          <img src={friend} className="bounce-top opa mt-5 mx-2" />
          <p className="heartbeat chatright posFriend">
            ถ้าเป็นยังงี้ไปโหลดมาใช้บ้างดีกว่า
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story12_6;
