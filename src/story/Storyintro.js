import React, { useEffect } from "react";

const Storyintro = ({ handleNext }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
      document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="container">
      <div className="col-xl-12 mx-auto indent">
        <p>
          ถ้าบอกว่าความฉลาดวัดกันที่ไหน เราคงนึกถึง IQ หรือ EQ
          <br/>แต่ยุคนี้ที่มีการใช้เวลาหลายๆชั่วโมงบนอินเทอร์เน็ตเป็นส่วนใหญ่
          <br/>ในแต่ละวัน
          แค่ IQ กับ EQ อาจจะไม่พอ เราจำเป็นต้องมี DQ หรือ ความฉลาดทางดิจิทัล
          เพิ่มเข้าไปด้วย
          แล้วเราจะรู้ได้ยังไงล่ะ
          <br/>ว่าเรามีความฉลาดทางดิจิทัลเป็นอย่างไร
        </p>
      </div>
    </div>
  );
};

export default Storyintro;
