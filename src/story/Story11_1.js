import React,{useEffect} from "react";

const Story11_1 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
    document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>แต่ในการใช้อินเทอร์เน็ตค้นหาความรู้<br/>คุณก็เคยทำอยู่แล้วใช่มั้ยล่ะ</p>
    </div>
  );
};

export default Story11_1;
