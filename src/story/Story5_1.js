import React,{useEffect} from "react";

const Story5_1 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
    document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>บนโลกออนไลน์เป็นโลกที่ใครจะทำอะไรก็ได้</p>
    </div>
  );
};

export default Story5_1;
