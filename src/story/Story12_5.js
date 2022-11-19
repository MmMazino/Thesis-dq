import React,{useEffect} from "react";
import tim from "../img/timmobile.png";
import share from "../img/shareadobo.png";

const Story12_5 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
    document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>แล้วโพสต์แชร์วิธีการดาวน์โหลดให้เพื่อนรู้<br/>ซึ่งอาจมีผลกระทบ<br/>ทำให้คนมีความละเลยต่อลิขสิทธิ์ด้านต่างๆด้วย</p>
      <div className="imgst mx-auto d-flex justify-content-center align-items-center mt-5">
        <div className="position-relative">
          <img src={tim} className="bounce-top opa mx-2" />
          <p className="heartbeat thoughtleft posJobshare">
            ของดีแบบนี้ต้องแชร์
          </p>
        </div>
        <div className="position-relative">
          <img src={share} className="my-2 mx-2 heartbeat" />
        </div>
      </div>
    </div>
  );
};

export default Story12_5;
