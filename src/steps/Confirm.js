import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import imgcase5 from "../img/case5.png";
import imgcase4 from "../img/case4.png";
import imgcase3 from "../img/case3.png";
import imgcase2 from "../img/case2.png";
import imgcase1 from "../img/case1.png";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Routes, Route } from "react-router-dom";
import UserForm from "../UserForm";

const Confirm = ({
  values,
  answerlist1,
  answerlist2,
  answerlist3,
  answerlist4,
  answerlist5,
  scorechoice1,
  scorechoice2,
  scorechoice3,
  scorechoice4,
  finalGender,
  handleBack,
}) => {
  const {
    Name,
    Age,
    Gender,
    Answer1,
    Answer2,
    Answer3,
    Answer4,
    Answer5,
    Answer6,
    Answer7,
    Answer8,
    Answer9,
    Answer10,
    Answer11,
    Answer12,
    Answer13,
    Answer14,
    Answer15,
    Answer16,
    Answer17,
    Answer18,
    Answer19,
    Answer20,
    Answer21,
    Answer22,
    Answer23,
    Answer24,
    Answer25,
    Answer26,
    Answer27,
    Answer28,
    Answer29,
    Answer30,
    Answer31,
    Answer32,
    Answer33,
  } = values;

  const answerarr = [
    Answer1,
    Answer2,
    Answer3,
    Answer4,
    Answer5,
    Answer6,
    Answer7,
    Answer8,
    Answer9,
    Answer10,
    Answer11,
    Answer12,
    Answer13,
    Answer14,
    Answer15,
    Answer16,
    Answer17,
    Answer18,
    Answer19,
    Answer20,
    Answer21,
    Answer22,
    Answer23,
    Answer24,
    Answer25,
    Answer26,
    Answer27,
    Answer28,
    Answer29,
    Answer30,
    Answer31,
    Answer32,
    Answer33,
  ];

  const Genderfinal = finalGender;

  const HandleSubmit = async (e) => {
    e.preventDefault();
    await sumScore();
    const totalscore = choicescore.reduce((a, b) => a + b, 0);
    const average = totalscore / 33;
    await addDoc(collection(db, "User"), {
      Name: Name,
      Age: Age,
      Gender: Genderfinal,
      Answer01: Answer1,
      Answer02: Answer2,
      Answer03: Answer3,
      Answer04: Answer4,
      Answer05: Answer5,
      Answer06: Answer6,
      Answer07: Answer7,
      Answer08: Answer8,
      Answer09: Answer9,
      Answer10: Answer10,
      Answer11: Answer11,
      Answer12: Answer12,
      Answer13: Answer13,
      Answer14: Answer14,
      Answer15: Answer15,
      Answer16: Answer16,
      Answer17: Answer17,
      Answer18: Answer18,
      Answer19: Answer19,
      Answer20: Answer20,
      Answer21: Answer21,
      Answer22: Answer22,
      Answer23: Answer23,
      Answer24: Answer24,
      Answer25: Answer25,
      Answer26: Answer26,
      Answer27: Answer27,
      Answer28: Answer28,
      Answer29: Answer29,
      Answer30: Answer30,
      Answer31: Answer31,
      Answer32: Answer32,
      Answer33: Answer33,
      average: average,
      Allscore: choicescore,
      Totalscore: totalscore,
      createdAt: new Date(),
    });
    setShow(false);
    setshowbtnback(true);
    if (totalscore >= 149 && totalscore <= 165) {
      setShowresult5(true);
      setShowbtn(false);
    } else if (totalscore >= 116 && totalscore <= 148) {
      setShowresult4(true);
      setShowbtn(false);
    } else if (totalscore >= 83 && totalscore <= 115) {
      setShowresult3(true);
      setShowbtn(false);
    } else if (totalscore >= 50 && totalscore <= 82) {
      setShowresult2(true);
      setShowbtn(false);
    } else if (totalscore >= 33 && totalscore <= 49) {
      setShowresult1(true);
      setShowbtn(false);
    } else {
      console.log("result error");
    }
  };

  const [showresult5, setShowresult5] = useState(false);
  const [showresult4, setShowresult4] = useState(false);
  const [showresult3, setShowresult3] = useState(false);
  const [showresult2, setShowresult2] = useState(false);
  const [showresult1, setShowresult1] = useState(false);
  const [showbtn, setShowbtn] = useState(true);

  const Result5 = () => (
    <div className="container text-center">
      <img src={imgcase5} className="imgresult" />
      <p className="fontresultTitle">ความฉลาดทางดิจิทัลอยู่ในระดับดีมาก</p>
      <p className="fontresult">
        คุณมีความฉลาดทางดิจิทัลอยู่ในระดับดีมาก
        สามารถใช้ชีวิตบนโลกดิจิทัลได้อย่าง
        <br />
        ดีเยี่ยมและคุณยังมีทักษะความรู้ดิจิทัลต่างๆ
        ติดตัวคุณอยู่มากมายและเมื่อเกิดปัญหาคุณก็จะสามารถแก้ไขได้อย่างง่ายดายและมีประสิทธิภาพ
      </p>
    </div>
  );
  const Result4 = () => (
    <div className="container text-center">
      <img src={imgcase4} className="imgresult" />
      <p className="fontresultTitle">ความฉลาดทางดิจิทัลอยู่ในระดับดี</p>
      <p className="fontresult">
        คุณมีความฉลาดทางดิจิทัลอยู่ในระดับดี สามารถใช้ชีวิตบนโลกดิจิทัลได้อย่าง
        <br />
        เหมาะสมและคุณยังมีทักษะความรู้ดิจิทัลติดตัวคุณอยู่มากและเมื่อเกิดปัญหา
        <br />
        คุณก็จะสามารถแก้ไขได้อย่างดี
      </p>
    </div>
  );
  const Result3 = () => (
    <div className="container text-center">
      <img src={imgcase3} className="imgresult" />
      <p className="fontresultTitle">ความฉลาดทางดิจิทัลอยู่ในระดับปานกลาง</p>
      <p className="fontresult">
        คุณมีความฉลาดทางดิจิทัลอยู่ในระดับปานกลาง สามารถใช้ชีวิตบนโลกดิจิทัล
        <br />
        ได้อย่างพอใช้แต่คุณก็ยังมีทักษะความรู้ดิจิทัลติดตัวคุณอยู่พอสมควร
        <br />
        แต่เมื่อเกิดปัญหาคุณก็ยังสามารถแก้ไขเรื่องบางอย่างได้อยู่
      </p>
    </div>
  );
  const Result2 = () => (
    <div className="container text-center">
      <img src={imgcase2} className="imgresult" />
      <p className="fontresultTitle">ความฉลาดทางดิจิทัลอยู่ในระดับน้อย</p>
      <p className="fontresult">
        คุณมีความฉลาดทางดิจิทัลอยู่ในระดับน้อย สามารถใช้ชีวิตบนโลกดิจิทัล
        <br />
        ได้อย่างไม่ดีมากนักและคุณก็ยังมีทักษะความรู้ดิจิทัลติดตัวคุณอยู่ไม่เยอะเท่าไหร่
        <br />
        อาจจะตกเป็นเหยื่อของผู้ไม่หวังดีบนโลกออนไลน์ได้
        ต้องศึกษาความรู้เพิ่มขึ้น
      </p>
    </div>
  );
  const Result1 = () => (
    <div className="container text-center">
      <img src={imgcase1} className="imgresult" />
      <p className="fontresultTitle">ความฉลาดทางดิจิทัลอยู่ในระดับน้อยมาก</p>
      <p className="fontresult">
        คุณมีความฉลาดทางดิจิทัลอยู่ในระดับน้อยมาก สามารถใช้ชีวิตบนโลกดิจิทัล
        <br />
        ได้อย่างไม่ค่อยดี และคุณก็ยังมีทักษะความรู้ดิจิทัลติดตัวคุณอยู่น้อยมาก
        <br />
        อาจจะตกเป็นเหยื่อของผู้ไม่หวังดีบนโลกออนไลน์ได้
        ต้องศึกษาความรู้เพิ่มขึ้น
      </p>
    </div>
  );
  const Btnsumit = () => (
    <button
      id="popup"
      className="btnsubmit mt-4 ptotalscore-4"
      onClick={HandleSubmit}
    >
      คลิกเพื่อดูผลคะแนน
    </button>
  );

  const Btnback = () => (
    <div>
      <button className="btnhandlebackresult mx-auto mt-2" onClick={handleBack}>
        <FontAwesomeIcon icon={faAngleDoubleLeft} />
      </button>
    </div>
  );

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const choicescore = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];

  function sumScore() {
    for (let i = 0; i < answerarr.length; i++) {
      switch (answerarr[i]) {
        case answerlist1[0]:
          choicescore[i] = scorechoice1[i];
          break;
        case answerlist2[0]:
          choicescore[i] = scorechoice2[i];
          break;
        case answerlist3[0]:
          choicescore[i] = scorechoice3[i];
          break;
        case answerlist4[0]:
          choicescore[i] = scorechoice4[i];
          break;
        case answerlist5[0]:
          choicescore[i] = scorechoice4[i];
          break;
        default:
          console.log("Answer" + i + "error");
          break;
      }
    }
    return choicescore;
  }

  const showAnswer = [];

  for (let i = 0; i < choicescore.length; i++) {
    showAnswer.push(
      <ListGroup.Item variant="success">
        Answer{i + 1}: {answerarr[i]}
      </ListGroup.Item>
    );
  }
  const [showbtnback, setshowbtnback] = useState(false);

  return (
    <div className="container">
      {showbtn ? (
        <p className="text-center">
          ตอนนี้คุณได้ทำแบบประเมินความฉลาดทางดิจิทัลเสร็จแล้ว
        </p>
      ) : null}
      {showbtn ? <Btnsumit /> : null}
      <div>
        {showresult5 ? <Result5 /> : null}
        {showresult4 ? <Result4 /> : null}
        {showresult3 ? <Result3 /> : null}
        {showresult2 ? <Result2 /> : null}
        {showresult1 ? <Result1 /> : null}
      </div>
      {showbtnback ? null : <Btnback />}
    </div>
  );
};

export default Confirm;
