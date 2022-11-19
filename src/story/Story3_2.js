import React,{useEffect} from "react";

const Story3_2 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
    document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="col-xl-6 text-center fadein">
      <p>
        บางคนก็ใช้เพื่อความบันเทิง เพื่อติดต่อสื่อสาร <br/>เพื่อค้นหาข้อมูลต่างๆ
      </p>
    </div>
  );
};

export default Story3_2;
