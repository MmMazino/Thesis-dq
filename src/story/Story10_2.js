import React,{useEffect} from "react";

const Story10_2 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
    document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>ก็จะมีร่องรอยที่เราได้เข้าถึงหลงเหลืออยู่<br/>ไม่ว่านานแค่ไหนร่องรอยก็ยังอยู่เสมอ</p>
    </div>
  );
};

export default Story10_2;
