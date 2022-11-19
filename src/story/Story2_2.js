import React, { useEffect } from "react";
import markfake from "../img/markfake.png";
import post from "../img/post.png";
import user from "../img/user.png"

const Story2_2 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
      document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="col-xl-6 text-center fadein">
      <p>
        แต่เมื่อมีใครมาตอบคอมเมนต์แนวไม่เห็นด้วย
        <br/>ด้วยคำที่หยาบคาย
        มาร์คก็จะคอมเมนต์ด่ากลับทันที
      </p>
      <div className="mx-auto d-flex justify-content-center">
        <div className="position-relative">
          <img src={post} className="fadein opa postimg" />
          <img src={markfake} className="position-absolute rounded-circle bg-white pos1imgcomment fadein" />
          <p className="position-absolute poscomment fadein">วุ่นวายจังวะ</p>
          <img src={user} className="position-absolute rounded-circle bg-white pos2imgcomment markanimate" />
          <p className="position-absolute poscomment2 markanimate">แล้วมึงเผือกอะไร</p>
          <img src={markfake} className="position-absolute rounded-circle bg-white pos3imgcomment" />
          <p className="position-absolute poscomment3 ">มึงนั่นแหละเผือก</p>
        </div>
      </div>
    </div>
  );
};

export default Story2_2;
