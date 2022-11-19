import React,{useEffect} from "react";

const Story9_1 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
    document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-12">
      <p>ในปัจจุบันมีแอปพลิเคชันหรือโปรแกรมที่ใช้ในการติดต่อสื่อสารในรูปแบบต่างๆ</p>
    </div>
  );
};

export default Story9_1;
