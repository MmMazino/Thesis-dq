import React,{useEffect} from "react";
import user from "../img/user.png";

const Story8_1 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
    document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-12">
      <p>ในปัจจุบันไม่ว่าคนเรามีความรู้สึกยังไง ก็มักโพสต์สเตตัสอยู่ตลอด</p>
    </div>
  );
};

export default Story8_1;
