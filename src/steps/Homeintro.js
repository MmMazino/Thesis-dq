import React,{useEffect} from "react";

const Homeintro = ({handleNext}) => {
    useEffect(() => {
        document.body.addEventListener("click", handleNext);
        return function cleanup() {
        document.body.removeEventListener("click", handleNext);
        };
      }, []);
  return (
    <div className="container fadein">
      <p className="mx-auto col-xl-12 indent">
          เว็บไซต์ On the way เป็นส่วนหนึ่งของโครงงานของเราเป็นการเดินทางเล่าเรื่องราวไปพร้อมกับผู้ใช้งานเว็บไซต์และจะมีการได้พบเจอเรื่องราวต่างๆ เกี่ยวกับทักษะความฉลาดทางดิจิทัล <br/>ในแต่ละด้านเพื่อให้คุณรู้ว่ามีความฉลาดทางดิจิทัลมากแค่ไหนผ่านการเล่าเรื่องดิจิทัล
      </p>
    </div>
  );
};

export default Homeintro;
