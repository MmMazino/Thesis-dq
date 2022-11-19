import React,{useEffect} from "react";
import elonpost from "../img/statuspost.png";
import elon from "../img/sadelon.png";

const Story8_2 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
    document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>“อีลอน” ก็เช่นกัน ตอนที่เขารู้สึกน้อยใจ <br/>เขาก็ชอบโพสต์สเตตัสเพื่อให้คนมาคอมเมนต์ให้กำลังใจ</p>
      <div className="mx-auto d-flex justify-content-center align-items-center">
        <div className="position-relative imgst">
          <img src={elon} className="bounce-top opa mt-2" />
          <p className="heartbeat thoughtleft posthoughtElon">อีลอนเองครับ</p>
        </div>
        <div className="position-relative mx-2 mt-4">
          <img src={elonpost} className="gatemobile"/>
          <p className="position-absolute poselonpost markanimate">ทำอะไรก็แย่ไปหมด</p>
        </div>
      </div>
    </div>
  );
};

export default Story8_2;
