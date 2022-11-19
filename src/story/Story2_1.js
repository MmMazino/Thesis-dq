import React, { useEffect } from "react";
import post from "../img/post.png";
import markfake from "../img/markfake.png";

const Story2_1 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
      document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="fadein col-xl-6 text-center">
      <p>
        และ มาร์ค ก็ยังชอบไปคอมเมนต์ในเรื่องเกี่ยวกับ
        <br />
        ประเด็นดราม่าดารา ดราม่าการเมืองต่างๆ
      </p>
      <div className="mx-auto d-flex justify-content-center">
        <div className="position-relative">
          <img src={post} className="fadein opa postimg" />
          <img src={markfake} className="position-absolute rounded-circle bg-white pos1imgcomment markanimate" />
          <p className="position-absolute poscomment markanimate">วุ่นวายจังวะ</p>
        </div>
      </div>
    </div>
  );
};

export default Story2_1;
