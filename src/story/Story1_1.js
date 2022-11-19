import React,{useEffect} from "react";
import internet from '../img/internet.png'

const Story1_1 = ({handleNext,handleBack}) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
    document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="col-xl-12 text-center">
      <p className="fadein">เมื่ออยู่บนโลกอินเทอร์เน็ต คุณจะสามารถสร้างตัวตนเป็นใครก็ได้</p>
      <div className="imgst opa fadein mx-auto"><img src={internet} className="rotate-center"/></div>
    </div>
  );
};

export default Story1_1;
