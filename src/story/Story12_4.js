import React,{useEffect} from "react";
import tim from "../img/tim.png";
import com from "../img/adobodownload.png";

const Story12_4 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
    document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>แต่ทิมต้องการประหยัดค่าใช้จ่าย<br/>ทิมจึงเลือกใช้วิธีการดาวน์โหลดโปรแกรมเถื่อน</p>
      <div className="imgst mx-auto d-flex justify-content-center align-items-center mt-5">
        <div className="position-relative">
          <img src={tim} className="bounce-top opa mx-2" />
          <p className="heartbeat thoughtleft posJobdownload">
            ดาวน์โหลดโปรแกรมเถื่อนดีกว่า
          </p>
        </div>
        <div className="position-relative">
          <img src={com} className="my-2 mx-2 heartbeat" />
        </div>
      </div>
    </div>
  );
};

export default Story12_4;
