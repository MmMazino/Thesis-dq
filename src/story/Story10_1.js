import React,{useEffect} from "react";


const Story10_1 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
    document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>แล้วรู้มั้ย? ไม่ว่าเราทำอะไร โพสต์อะไร หรือเข้าไปดูอะไร</p>
    </div>
  );
};

export default Story10_1;
