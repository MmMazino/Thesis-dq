import React, { useEffect } from "react";

const Story3_1 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
      document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="col-xl-6 text-center fadein">
      <p>
        ในปัจจุบันการใช้สื่อดิจิทัล และเทคโนโลยีต่างๆ
        <br />
        ในชีวิตประจำวันเป็นเรื่องปกติไปแล้ว
      </p>
    </div>
  );
};

export default Story3_1;
