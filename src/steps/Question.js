import React from "react";

const Question1 = ({question,handleNext
}) => {
  return (
    <div>
      <h1 onClick={handleNext}>{question}</h1>
    </div>
  );
};

export default Question1;
