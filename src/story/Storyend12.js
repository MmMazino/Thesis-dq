import React,{useEffect} from "react";

const Storyend12 = ({handleNext,handleBack}) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
    document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="fadein col-xl-6 text-center"><p>ถ้าเป็นคุณ คุณมีความคิดเห็นอย่างไร?</p></div>
  )
}

export default Storyend12