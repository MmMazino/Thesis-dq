import React,{useEffect} from "react";

const Storyend11 = ({handleNext,handleBack}) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
    document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="fadein col-xl-6 text-center"><p>แล้วคุณล่ะคิดเห็นอย่างไร?</p></div>
  )
}

export default Storyend11