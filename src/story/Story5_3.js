import React,{useEffect} from "react";
import gate from "../img/gate.png";
import bet from "../img/bet.png";

const Story5_3 = ({ handleNext, handleBack }) => {
  useEffect(() => {
    document.body.addEventListener("click", handleNext);
    return function cleanup() {
    document.body.removeEventListener("click", handleNext);
    };
  }, []);
  return (
    <div className="text-center fadein col-xl-6">
      <p>จึงทำให้เกตส์เล่นโซเชียลมีเดีย ชอบดูอะไรคนเดียว<br/>และชอบเข้าเว็บพนันออนไลน์ต่างๆ ด้วย</p>
      <div className="imgst mx-auto d-flex justify-content-center">
        <div className="position-relative mx-2 mt-4">
          <img src={gate} className="vibrate-1" />
          <p className="heartbeat thoughtleft posthoughtGate5_3">
            หาอะไรเล่นดีกว่า
          </p>
        </div>
        <div className="position-relative mx-2 mt-4">
          <img src={bet} className="jello-vertical" />
        </div>
      </div>
    </div>
  );
};

export default Story5_3;
