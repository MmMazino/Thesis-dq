import React,{useEffect} from "react";

const Story9_2 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
    document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-12">
      <p>เกิดขึ้นมาใหม่มากมายเพื่อให้ตรงตามการใช้งานของแต่ละคน</p>
    </div>
  );
};

export default Story9_2;
