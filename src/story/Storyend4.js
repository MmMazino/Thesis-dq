import React,{useEffect} from "react";

const Storyend4 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
    document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>ถ้าเป็นคุณ คุณมีความคิดเห็นอย่างไร?</p>
    </div>
  );
};

export default Storyend4;
