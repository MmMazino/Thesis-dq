import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

const Question1 = ({
  question,
  handleChoose,
  answer1,
  answer2,
  answer3,
  answer4,
  answer5,
  handleBack,
}) => {
  return (
    <div className="text-center px-3 col-xl-6 fadein">
      {question}
      <button className="btnanswer my-4" value={answer1} onClick={handleChoose}>
        {answer1}
      </button>
      <button className="btnanswer mb-4" value={answer2} onClick={handleChoose}>
        {answer2}
      </button>
      <button className="btnanswer mb-4" value={answer3} onClick={handleChoose}>
        {answer3}
      </button>
      <button className="btnanswer mb-4" value={answer4} onClick={handleChoose}>
        {answer4}
      </button>
      <button className="btnanswer mb-4" value={answer5} onClick={handleChoose}>
        {answer5}
      </button>
      <button
        className="btnhandleback btnhandlebackquestion-pos"
        onClick={handleBack}>
        <FontAwesomeIcon icon={faAngleDoubleLeft} />
      </button>
    </div>
  );
};

export default Question1;
