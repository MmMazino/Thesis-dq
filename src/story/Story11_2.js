import React, { useEffect } from "react";
import job from "../img/job.png";
import social from "../img/social.png";

const Story11_2 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
      document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>
        และในอินเทอร์เน็ตมีสื่อที่ให้ความรู้อยู่หลายแบบ
        <br/>ทั้งข้อมูลจากกลุ่มโซเชียลมีเดีย คลิปYoutube
      </p>
    </div>
  );
};

export default Story11_2;
