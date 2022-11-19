import React, { useState, useEffect } from "react";
import Age from "./steps/Age";
import Confirm from "./steps/Confirm";
import UserDetails from "./steps/UserDetail";
import Gender from "./steps/Gender";
import Welcome from "./Welcome";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import Question1 from "./steps/Question1";
import bg from "./bg.mp4";
import Storyintro from "./story/Storyintro";
import Story1_1 from "./story/Story1_1";
import Story1_2 from "./story/Story1_2";
import Story1_3 from "./story/Story1_3";
import Storyend from "./story/Storyend";
import Story2_1 from "./story/Story2_1";
import Story2_2 from "./story/Story2_2";
import Storyend2 from "./story/Storyend2";
import Story3_1 from "./story/Story3_1";
import Story3_2 from "./story/Story3_2";
import Story3_3 from "./story/Story3_3";
import Story3_4 from "./story/Story3_4";
import Storyend3 from "./story/Storyend3";
import Story4_1 from "./story/Story4_1";
import Story4_2 from "./story/Story4_2";
import Storyend4 from "./story/Storyend4";
import Story5_1 from "./story/Story5_1";
import Story5_2 from "./story/Story5_2";
import Story5_3 from "./story/Story5_3";
import Story5_4 from "./story/Story5_4";
import Storyend5 from "./story/Storyend5";
import Story6_1 from "./story/Story6_1";
import Story6_2 from "./story/Story6_2";
import Story6_3 from "./story/Story6_3";
import Storyend6 from "./story/Storyend6";
import Story7_1 from "./story/Story7_1";
import Story7_2 from "./story/Story7_2";
import Storyend7 from "./story/Storyend7";
import Story8_1 from "./story/Story8_1";
import Story8_2 from "./story/Story8_2";
import Story8_3 from "./story/Story8_3";
import Storyend8 from "./story/Storyend8";
import Story9_1 from "./story/Story9_1";
import Story9_2 from "./story/Story9_2";
import Story9_3 from "./story/Story9_3";
import Story9_4 from "./story/Story9_4";
import Story9_5 from "./story/Story9_5";
import Storyend9 from "./story/Storyend9";
import Story10_1 from "./story/Story10_1";
import Story10_2 from "./story/Story10_2";
import Story10_3 from "./story/Story10_3";
import Story10_4 from "./story/Story10_4";
import Story10_5 from "./story/Story10_5";
import Story10_6 from "./story/Story10_6";
import Storyend10 from "./story/Storyend10";
import Story11_1 from "./story/Story11_1";
import Story11_2 from "./story/Story11_2";
import Story11_3 from "./story/Story11_3";
import Storyend11 from "./story/Storyend11";
import Story12_1 from "./story/Story12_1";
import Story12_2 from "./story/Story12_2";
import Story12_3 from "./story/Story12_3";
import Story12_4 from "./story/Story12_4";
import Story12_5 from "./story/Story12_5";
import Story12_6 from "./story/Story12_6";
import Storyend12 from "./story/Storyend12";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import Homeintro from "./steps/Homeintro";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import checkicon from "../src/img/checkicon.png";
import piano from "../src/img/piano.mp3";
import ReactAudioPlayer from "react-audio-player";

const UserForm = () => {
  //Steps
  const [activeStep, setActiveStep] = useState(0);

  console.log(activeStep);

  //State variable
  const [multiFormValues, setmultiFormValues] = useState({
    Name: "",
    Age: "",
    Gender: "",
    Answer1: "",
    Answer2: "",
    Answer3: "",
    Answer4: "",
    Answer5: "",
    Answer6: "",
    Answer7: "",
    Answer8: "",
    Answer9: "",
    Answer10: "",
    Answer11: "",
    Answer12: "",
    Answer13: "",
    Answer14: "",
    Answer15: "",
    Answer16: "",
    Answer17: "",
    Answer18: "",
    Answer19: "",
    Answer20: "",
    Answer21: "",
    Answer22: "",
    Answer23: "",
    Answer24: "",
    Answer25: "",
    Answer26: "",
    Answer27: "",
    Answer28: "",
    Answer29: "",
    Answer30: "",
    Answer31: "",
    Answer32: "",
    Answer33: "",
  });

  //Navigates to the next page
  const handleNext = () => {
    setActiveStep((nextStep) => nextStep + 1);
  };
  //Navigates to the pre page
  const handleBack = () => {
    setActiveStep((previousStep) => previousStep - 1);
  };
  const handle2Back = () => {
    setActiveStep((previousStep) => previousStep - 2);
  };

  //Handle form value state on change
  const handleChange = (input) => (e) => {
    setmultiFormValues({ ...multiFormValues, [input]: e.target.value });
  };

  const [gender0, setgender0] = useState({ gender: "" });

  const handleChooseMale = () => {
    setgender0({ gender: "Male" });
    setActiveStep((nextStep) => nextStep + 1);
    console.log(gender0);
  };
  const handleChooseFemale = () => {
    setgender0({ gender: "Female" });
    setActiveStep((nextStep) => nextStep + 1);
    console.log(gender0);
  };

  const handleChoose = (click) => (e) => {
    setmultiFormValues({ ...multiFormValues, [click]: e.target.value });
    setActiveStep((nextStep) => nextStep + 1);
  };

  const handleSubmit1 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated1(true);
      setActiveStep((nextStep) => nextStep + 1);
    }
  };

  const handleSubmit2 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated2(true);
      setActiveStep((nextStep) => nextStep + 1);
    }
  };

  //get data from database
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "Question"));
    const unsubQuestion = onSnapshot(q, (querySnapshot) => {
      let questionArray = [];
      querySnapshot.forEach((doc) => {
        questionArray.push({ id: doc.id, ...doc.data() });
      });
      setQuestion(questionArray);
    });
    return () => unsubQuestion();
  }, []);

  useEffect(() => {
    const qA = query(collection(db, "Answer"));
    const unsubAnswer = onSnapshot(qA, (querySnapshot) => {
      let answerArray = [];
      querySnapshot.forEach((doc) => {
        answerArray.push({ id: doc.id, ...doc.data() });
      });
      setAnswer(answerArray);
    });
    return () => unsubAnswer();
  }, []);

  //Array map data
  const questionlist = question.map((e) => {
    return e.Question;
  });
  const answer1 = answer.map((e) => {
    return e.choice1;
  });
  const answer2 = answer.map((e) => {
    return e.choice2;
  });
  const answer3 = answer.map((e) => {
    return e.choice3;
  });
  const answer4 = answer.map((e) => {
    return e.choice4;
  });
  const answer5 = answer.map((e) => {
    return e.choice5;
  });
  const scorechoice1 = answer.map((e) => {
    return e.scorechoice1;
  });
  const scorechoice2 = answer.map((e) => {
    return e.scorechoice2;
  });
  const scorechoice3 = answer.map((e) => {
    return e.scorechoice3;
  });
  const scorechoice4 = answer.map((e) => {
    return e.scorechoice4;
  });
  const scorechoice5 = answer.map((e) => {
    return e.scorechoice5;
  });

  const Answerloop = [
    "Answer1",
    "Answer2",
    "Answer3",
    "Answer4",
    "Answer5",
    "Answer6",
    "Answer7",
    "Answer8",
    "Answer9",
    "Answer10",
    "Answer11",
    "Answer12",
    "Answer13",
    "Answer14",
    "Answer15",
    "Answer16",
    "Answer17",
    "Answer18",
    "Answer19",
    "Answer20",
    "Answer21",
    "Answer22",
    "Answer23",
    "Answer24",
    "Answer25",
    "Answer26",
    "Answer27",
    "Answer28",
    "Answer29",
    "Answer30",
    "Answer31",
    "Answer32",
    "Answer33",
  ];
  const activeAnswer = [];

  const question1 = <p>เมื่อคุณสร้างโปรไฟล์ คุณจะใช้ชื่อจริง</p>;
  const question2 = <p>เมื่อคุณตั้งรูปโปรไฟล์ คุณจะใช้รูปภาพของตนเอง</p>;
  const question3 = (
    <p>
      เมื่อคุณรู้สึกว่ามีคนไม่เห็นด้วยกับความคิดของคุณ
      <br />
      ในสื่อดิจิทัล คุณจะเพิกเฉยทันที
    </p>
  );
  const question4 = (
    <p>
      เมื่อคุณรู้สึกว่าสื่อสารกับผู้ที่มีพฤติกรรมไม่เหมาะสม
      <br />
      ในสื่อดิจิทัล คุณจะหยุดสื่อสารทันที
    </p>
  );
  const question5 = <p>เมื่อคุณทำงานหรือเรียน คุณจะไม่เข้าดูสื่อดิจิทัล</p>;
  const question6 = (
    <p>เมื่อคุณใช้สื่อออนไลน์ คุณจะจัดสรรเวลาได้อย่างเหมาะสม</p>
  );
  const question7 = <p>เมื่อคุณอยู่กับครอบครัว คุณจะไม่ใช้สื่อดิจิทัล</p>;
  const question8 = (
    <p>
      เมื่อคุณต้องการแก้ไขปัญหาเฉพาะหน้า
      คุณจะเลือกใช้เครื่องมือที่น่าเชื่อถือในการค้นหาข้อมูลเสมอ
    </p>
  );
  const question9 = (
    <p>
      เมื่อคุณรู้สึกว่าถูกคุกคามบนสื่อดิจิทัล คุณจะหลีกเลี่ยง
      <br />
      หรือหยุดการสื่อสารทันที
    </p>
  );
  const question10 = (
    <p>
      เมื่อคุณถูกรังแกด้วยคำพูดหรือรูปภาพบนสื่อดิจิทัล
      <br />
      คุณจะหลีกเลี่ยงหรือหยุดการสื่อสารทันที
    </p>
  );
  const question11 = (
    <p>
      เมื่อคุณถูกผู้อื่นขอข้อมูลส่วนบุคคลบนสื่อดิจิทัล
      <br />
      คุณจะหลีกเลี่ยงหรือหยุดการสื่อสารทันที
    </p>
  );
  const question12 = (
    <p>
      เมื่อคุณใช้งานสื่อดิจิทัลในที่สาธารณะ
      คุณจะไม่เลือกดูเนื้อหาที่ไม่เหมาะสมหรือเว็บไซต์ลามกอนาจาร
    </p>
  );
  const question13 = (
    <p>
      เมื่อคุณใช้งานสื่อดิจิทัล <br />
      คุณสามารถรับรู้ได้เมื่อเกิดภัยคุกคาม
    </p>
  );
  const question14 = (
    <p>
      เมื่อคุณใช้งานสื่อดิจิทัล คุณใช้โปรแกรมเพื่อตรวจสอบ
      <br />
      ภัยคุกคามที่ส่งผลต่อความเสียหายของสื่อดิจิทัล
    </p>
  );
  const question15 = (
    <p>
      เมื่อคุณรู้สึกสงสัยในตัวบุคคลใดบุคคลหนึ่ง <br />
      คุณจะไม่สื่อสารกับบุคคลนั้น
    </p>
  );
  const question16 = (
    <p>เมื่อคุณสร้างรหัสผ่าน จะไม่มีผู้ใดได้รับรู้รหัสผ่านของคุณ</p>
  );
  const question17 = (
    <p>
      เมื่อคุณรับรู้ความรู้สึกของผู้อื่น
      <br />
      เมื่อพวกเขาโพสต์ข้อความเศร้าคุณจะเพิกเฉย
    </p>
  );
  const question18 = (
    <p>
      เมื่อคุณเห็นข้อความขอความช่วยเหลือ <br />
      คุณจะโพสต์คำแนะนำกลับไปหาเขา
    </p>
  );
  const question19 = (
    <p>
      เมื่อคุณใช้งานสื่อดิจิทัล
      <br />
      คุณจะโพสต์ข้อความแสดงความรู้สึกน้อยใจหรือรู้สึกโกรธ
    </p>
  );
  const question20 = (
    <p>เมื่อคุณทักทายเพื่อนหรือคนรู้จัก คุณจะใช้คำพูดที่สุภาพ</p>
  );
  const question21 = (
    <p>
      เมื่อคุณทำงานร่วมกับผู้อื่น คุณจะบังคับให้ผู้อื่น
      <br />
      ใช้ช่องทางการสื่อสารที่คุณถนัดเท่านั้น
    </p>
  );
  const question22 = (
    <p>
      เมื่อคุณต้องการมอบหมายงานให้ผู้อื่นอย่างเร่งด่วน
      <br />
      คุณจะมอบหมายงานผ่านสื่อดิจิทัล โดยใช้ภาษาที่สุภาพ
    </p>
  );
  const question23 = (
    <p>
      เมื่อคุณทำงานร่วมกับผู้อื่น คุณใช้สื่อดิจิทัลเป็นสื่อกลาง
      <br />
      ที่สามารถช่วยทำงานได้อย่างมีประสิทธิภาพ
    </p>
  );
  const question24 = (
    <p>
      เมื่อคุณค้นหาข้อมูลประกอบการทำงาน
      <br />
      คุณจะเลือกใช้สื่อดิจิทัลที่น่าเชื่อถือและถูกต้องเท่านั้น
    </p>
  );
  const question25 = (
    <p>
      เมื่อคุณค้นหาข้อมูลในชีวิตประจำวัน คุณจะเลือกใช้
      <br />
      แหล่งข้อมูลดิจิทัลที่เชื่อถือได้และถูกต้องเท่านั้น
    </p>
  );
  const question26 = (
    <p>
      เมื่อคุณต้องการแยกแยะข้อเท็จจริงประกอบการตัดสินใจ
      คุณจะเลือกใช้สื่อดิจิทัลที่น่าเชื่อถือ
    </p>
  );
  const question27 = (
    <p>
      เมื่อคุณค้นหาข้อมูล
      <br />
      คุณใช้สื่อดิจิทัลเพื่อช่วยเพิ่มประสิทธิภาพในการทำงาน
    </p>
  );
  const question28 = (
    <p>
      เมื่อคุณได้รับความรู้จากสื่อดิจิทัล
      <br />
      คุณจะแบ่งปันความรู้นั้นกับผู้อื่น
    </p>
  );
  const question29 = (
    <p>
      เมื่อคุณต้องการใช้ผลงานของผู้อื่น
      <br />
      คุณจะอ้างอิงแหล่งที่มาเสมอ
    </p>
  );
  const question30 = (
    <p>
      เมื่อคุณแบ่งปันข้อมูลในสื่อดิจิทัล
      <br />
      คุณจะไม่ละเมิดสิทธิความเป็นส่วนตัวและกฎหมายลิขสิทธิ์
    </p>
  );
  const question31 = (
    <p>
      เมื่อคุณต้องการดาวน์โหลดซอฟต์แวร์
      <br />
      คุณจะไม่ดาวน์โหลดที่ผิดลิขสิทธิ์
    </p>
  );
  const question32 = (
    <p>
      เมื่อคุณแสดงความคิดเห็นบนสื่อดิจิทัล
      <br />
      คุณจะไม่อ้างถึงบุคคลอื่น
    </p>
  );
  const question33 = (
    <p>
      เมื่อคุณโพสต์ข้อความในสื่อดิจิทัล
      <br />
      คุณจะนึกถึงผลกระทบต่อสังคม
    </p>
  );

  const [validated1, setValidated1] = useState(false);
  const [validated2, setValidated2] = useState(false);

  const barstep = activeStep;

  return (
    <div>
      <div
        className="container barline"
        style={
          activeStep === 92
            ? { display: "none" }
            : {} && activeStep === 0
            ? { display: "none" }
            : {} && activeStep === 1
            ? { display: "none" }
            : {} && activeStep === 2
            ? { display: "none" }
            : {} && activeStep === 3
            ? { display: "none" }
            : {} && activeStep === 4
            ? { display: "none" }
            : {} && activeStep === 5
            ? { display: "none" }
            : {}
        }
      >
        <ProgressBar
          percent={barstep === 91 ? barstep + 9 : barstep}
          filledBackground="#baffc9"
        >
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src={checkicon}
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src={checkicon}
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src={checkicon}
              />
            )}
          </Step>
        </ProgressBar>
      </div>
      <video className="videobg" autoPlay loop muted>
        <source src={bg} type="video/mp4" />
      </video>
      <div className="content d-flex justify-content-center align-items-center">
        {activeStep === 0 && <Welcome handleNext={handleNext} />}
        {activeStep === 1 && <Homeintro handleNext={handleNext} />}
        {activeStep === 2 && (
          <UserDetails
            validated={validated1}
            values={multiFormValues}
            handleChange={handleChange}
            handleNext={handleSubmit1}
          />
        )}
        {activeStep === 3 && (
          <Age
            validated={validated2}
            values={multiFormValues}
            handleChange={handleChange}
            handleNext={handleSubmit2}
            handleBack={handleBack}
          />
        )}
        {activeStep === 4 && (
          <Gender
            handleChoose1={handleChooseMale}
            handleChoose2={handleChooseFemale}
            handleBack={handleBack}
          />
        )}
        {activeStep === 5 && (
          <Storyintro handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 6 && (
          <Story1_1 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 7 && (
          <Story1_2 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 8 && (
          <Storyend handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 9 && (
          <Question1
            key={Answerloop}
            question={question1}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[0])}
          />
        )}
        {activeStep === 10 && (
          <Question1
            key={Answerloop}
            question={question2}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[1])}
          />
        )}
        {activeStep === 11 && (
          <Story2_1 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 12 && (
          <Story2_2 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 13 && (
          <Storyend2 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 14 && (
          <Question1
            key={Answerloop}
            question={question3}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[2])}
          />
        )}
        {activeStep === 15 && (
          <Question1
            key={Answerloop}
            question={question4}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[3])}
          />
        )}
        {activeStep === 16 && (
          <Story3_1 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 17 && (
          <Story3_2 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 18 && (
          <Story3_3 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 19 && (
          <Story3_4 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 20 && (
          <Storyend3 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 21 && (
          <Question1
            key={Answerloop}
            question={question5}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[4])}
          />
        )}
        {activeStep === 22 && (
          <Question1
            key={Answerloop}
            question={question6}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[5])}
          />
        )}
        {activeStep === 23 && (
          <Question1
            key={Answerloop}
            question={question7}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[6])}
          />
        )}
        {activeStep === 24 && (
          <Story4_1 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 25 && (
          <Story4_2 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 26 && (
          <Storyend4 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 27 && (
          <Question1
            key={Answerloop}
            question={question8}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[7])}
          />
        )}
        {activeStep === 28 && (
          <Story5_1 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 29 && (
          <Story5_2 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 30 && (
          <Story5_3 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 31 && (
          <Story5_4 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 32 && (
          <Storyend5 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 33 && (
          <Question1
            key={Answerloop}
            question={question9}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[8])}
          />
        )}
        {activeStep === 34 && (
          <Question1
            key={Answerloop}
            question={question10}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[9])}
          />
        )}
        {activeStep === 35 && (
          <Question1
            key={Answerloop}
            question={question11}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[10])}
          />
        )}
        {activeStep === 36 && (
          <Question1
            key={Answerloop}
            question={question12}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[11])}
          />
        )}
        {activeStep === 37 && (
          <Story6_1 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 38 && (
          <Story6_2 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 39 && (
          <Story6_3 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 40 && (
          <Storyend6 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 41 && (
          <Question1
            key={Answerloop}
            question={question13}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[12])}
          />
        )}
        {activeStep === 42 && (
          <Question1
            key={Answerloop}
            question={question14}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[13])}
          />
        )}
        {activeStep === 43 && (
          <Question1
            key={Answerloop}
            question={question15}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[14])}
          />
        )}
        {activeStep === 44 && (
          <Story7_1 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 45 && (
          <Story7_2 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 46 && (
          <Storyend7 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 47 && (
          <Question1
            key={Answerloop}
            question={question16}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[15])}
          />
        )}
        {activeStep === 48 && (
          <Story8_1 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 49 && (
          <Story8_2 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 50 && (
          <Story8_3 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 51 && (
          <Storyend8 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 52 && (
          <Question1
            key={Answerloop}
            question={question17}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[16])}
          />
        )}
        {activeStep === 53 && (
          <Question1
            key={Answerloop}
            question={question18}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[17])}
          />
        )}
        {activeStep === 54 && (
          <Question1
            key={Answerloop}
            question={question19}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[18])}
          />
        )}
        {activeStep === 55 && (
          <Story9_1 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 56 && (
          <Story9_2 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 57 && (
          <Story9_3 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 58 && (
          <Storyend9 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 59 && (
          <Question1
            key={Answerloop}
            question={question20}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[19])}
          />
        )}
        {activeStep === 60 && (
          <Question1
            key={Answerloop}
            question={question21}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[20])}
          />
        )}
        {activeStep === 61 && (
          <Question1
            key={Answerloop}
            question={question22}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[21])}
          />
        )}
        {activeStep === 62 && (
          <Question1
            key={Answerloop}
            question={question23}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[22])}
          />
        )}
        {activeStep === 63 && (
          <Story10_1 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 64 && (
          <Story10_2 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 65 && (
          <Story10_3 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 66 && (
          <Story10_4 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 67 && (
          <Story10_5 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 68 && (
          <Story10_6 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 69 && (
          <Storyend10 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 70 && (
          <Question1
            key={Answerloop}
            question={question24}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[23])}
          />
        )}
        {activeStep === 71 && (
          <Question1
            key={Answerloop}
            question={question25}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[24])}
          />
        )}
        {activeStep === 72 && (
          <Question1
            key={Answerloop}
            question={question26}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[25])}
          />
        )}
        {activeStep === 73 && (
          <Story11_1 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 74 && (
          <Story11_2 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 75 && (
          <Story11_3 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 76 && (
          <Storyend11 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 77 && (
          <Question1
            key={Answerloop}
            question={question27}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[26])}
          />
        )}
        {activeStep === 78 && (
          <Question1
            key={Answerloop}
            question={question28}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[27])}
          />
        )}
        {activeStep === 79 && (
          <Story12_1 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 80 && (
          <Story12_2 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 81 && (
          <Story12_3 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 82 && (
          <Story12_4 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 83 && (
          <Story12_5 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 84 && (
          <Story12_6 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 85 && (
          <Storyend12 handleNext={handleNext} handleBack={handleBack} />
        )}
        {activeStep === 86 && (
          <Question1
            key={Answerloop}
            question={question29}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[28])}
          />
        )}
        {activeStep === 87 && (
          <Question1
            key={Answerloop}
            question={question30}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[29])}
          />
        )}
        {activeStep === 88 && (
          <Question1
            key={Answerloop}
            question={question31}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[30])}
          />
        )}
        {activeStep === 89 && (
          <Question1
            key={Answerloop}
            question={question32}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[31])}
          />
        )}
        {activeStep === 90 && (
          <Question1
            key={Answerloop}
            question={question33}
            answer1={answer1[0]}
            answer2={answer2[0]}
            answer3={answer3[0]}
            answer4={answer4[0]}
            answer5={answer5[0]}
            handleNext={handleNext}
            handleBack={handleBack}
            handleChoose={handleChoose(Answerloop[32])}
          />
        )}
        {activeStep === 91 && (
          <Confirm
            finalGender={gender0}
            values={multiFormValues}
            handleChange={handleChange}
            answerlist1={answer1}
            answerlist2={answer2}
            answerlist3={answer3}
            answerlist4={answer4}
            answerlist5={answer5}
            scorechoice1={scorechoice1}
            scorechoice2={scorechoice2}
            scorechoice3={scorechoice3}
            scorechoice4={scorechoice4}
            scorechoice5={scorechoice5}
            handleBack={handleBack}
          />
        )}
      </div>
      <button
        className="btnhandleback btnhandleback-pos"
        onClick={handle2Back}
        style={
          activeStep === 0
            ? { display: "none" }
            : {} && activeStep === 1
            ? { display: "none" }
            : {} && activeStep === 2
            ? { display: "none" }
            : {} && activeStep === 3
            ? { display: "none" }
            : {} && activeStep === 4
            ? { display: "none" }
            : {} && activeStep === 9
            ? { display: "none" }
            : {} && activeStep === 10
            ? { display: "none" }
            : {} && activeStep === 14
            ? { display: "none" }
            : {} && activeStep === 15
            ? { display: "none" }
            : {} && activeStep === 21
            ? { display: "none" }
            : {} && activeStep === 22
            ? { display: "none" }
            : {} && activeStep === 23
            ? { display: "none" }
            : {} && activeStep === 27
            ? { display: "none" }
            : {} && activeStep === 33
            ? { display: "none" }
            : {} && activeStep === 34
            ? { display: "none" }
            : {} && activeStep === 35
            ? { display: "none" }
            : {} && activeStep === 36
            ? { display: "none" }
            : {} && activeStep === 41
            ? { display: "none" }
            : {} && activeStep === 42
            ? { display: "none" }
            : {} && activeStep === 43
            ? { display: "none" }
            : {} && activeStep === 47
            ? { display: "none" }
            : {} && activeStep === 52
            ? { display: "none" }
            : {} && activeStep === 53
            ? { display: "none" }
            : {} && activeStep === 54
            ? { display: "none" }
            : {} && activeStep === 59
            ? { display: "none" }
            : {} && activeStep === 60
            ? { display: "none" }
            : {} && activeStep === 61
            ? { display: "none" }
            : {} && activeStep === 62
            ? { display: "none" }
            : {} && activeStep === 70
            ? { display: "none" }
            : {} && activeStep === 71
            ? { display: "none" }
            : {} && activeStep === 72
            ? { display: "none" }
            : {} && activeStep === 77
            ? { display: "none" }
            : {} && activeStep === 78
            ? { display: "none" }
            : {} && activeStep === 86
            ? { display: "none" }
            : {} && activeStep === 87
            ? { display: "none" }
            : {} && activeStep === 88
            ? { display: "none" }
            : {} && activeStep === 89
            ? { display: "none" }
            : {} && activeStep === 90
            ? { display: "none" }
            : {} && activeStep === 91
            ? { display: "none" }
            : {}
        }
      >
        <FontAwesomeIcon icon={faAngleDoubleLeft} />
      </button>
      <button
        className="btnhandlenext btnhandlenext-pos"
        style={
          activeStep === 0
            ? { display: "none" }
            : {} && activeStep === 1
            ? { display: "none" }
            : {} && activeStep === 2
            ? { display: "none" }
            : {} && activeStep === 3
            ? { display: "none" }
            : {} && activeStep === 4
            ? { display: "none" }
            : {} && activeStep === 9
            ? { display: "none" }
            : {} && activeStep === 10
            ? { display: "none" }
            : {} && activeStep === 14
            ? { display: "none" }
            : {} && activeStep === 15
            ? { display: "none" }
            : {} && activeStep === 21
            ? { display: "none" }
            : {} && activeStep === 22
            ? { display: "none" }
            : {} && activeStep === 23
            ? { display: "none" }
            : {} && activeStep === 27
            ? { display: "none" }
            : {} && activeStep === 33
            ? { display: "none" }
            : {} && activeStep === 34
            ? { display: "none" }
            : {} && activeStep === 35
            ? { display: "none" }
            : {} && activeStep === 36
            ? { display: "none" }
            : {} && activeStep === 41
            ? { display: "none" }
            : {} && activeStep === 42
            ? { display: "none" }
            : {} && activeStep === 43
            ? { display: "none" }
            : {} && activeStep === 47
            ? { display: "none" }
            : {} && activeStep === 52
            ? { display: "none" }
            : {} && activeStep === 53
            ? { display: "none" }
            : {} && activeStep === 54
            ? { display: "none" }
            : {} && activeStep === 59
            ? { display: "none" }
            : {} && activeStep === 60
            ? { display: "none" }
            : {} && activeStep === 61
            ? { display: "none" }
            : {} && activeStep === 62
            ? { display: "none" }
            : {} && activeStep === 70
            ? { display: "none" }
            : {} && activeStep === 71
            ? { display: "none" }
            : {} && activeStep === 72
            ? { display: "none" }
            : {} && activeStep === 77
            ? { display: "none" }
            : {} && activeStep === 78
            ? { display: "none" }
            : {} && activeStep === 86
            ? { display: "none" }
            : {} && activeStep === 87
            ? { display: "none" }
            : {} && activeStep === 88
            ? { display: "none" }
            : {} && activeStep === 89
            ? { display: "none" }
            : {} && activeStep === 90
            ? { display: "none" }
            : {} && activeStep === 91
            ? { display: "none" }
            : {}
        }
      >
        <FontAwesomeIcon icon={faAngleDoubleRight} />
      </button>
    </div>
  );
};

export default UserForm;
