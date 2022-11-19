import { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Questionlist = () => {

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
  return (<div>test</div>);
};

export default Questionlist;
