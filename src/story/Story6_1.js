import React,{useEffect} from "react";

const Story6_1 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
    document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>ในยุคนี้ บางคนอาจจะใช้แอปพลิเคชันหาคู่<br/>เพื่อหาคนคุย หรือหาแฟนกัน</p>
    </div>
  );
};

export default Story6_1;
