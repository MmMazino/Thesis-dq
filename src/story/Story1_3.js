import React,{useEffect} from "react";

const Story1_3 = ({handleNext,handleBack}) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
    document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="fadein col-xl-6 text-center"><p>เพื่อไปหลอกคนอื่น สร้างความเดือดร้อนให้ผู้อื่น</p></div>
  )
}

export default Story1_3