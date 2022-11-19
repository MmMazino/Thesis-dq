import React,{useEffect} from "react";

const Story12_2 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
    document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>เราสามารถทำอะไรก็ได้ เอาข้อมูลมาจากไหนก็ได้ <br/>หรือจะดาวน์โหลดอะไรก็ได้</p>
    </div>
  );
};

export default Story12_2;
