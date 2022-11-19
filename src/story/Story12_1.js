import React,{useEffect} from "react";

const Story12_1 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
    document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>ทุกคนก็รู้กันอยู่ว่าอินเทอร์เน็ตเป็นโลกที่เปิดเป็นอิสระ</p>
    </div>
  );
};

export default Story12_1;
