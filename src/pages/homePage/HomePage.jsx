import { Fragment, useState } from "react";
import "./HomePage.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const HomePage = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const handleNextClick = () => {
    if (step < 3) return setStep(step + 1);
  };
  const handlePreviousClick = () => {
    if (step > 1) return setStep(step - 1);
  };
  return (
    <Fragment>
      {isOpen?<button className="close" onClick={()=>{setIsOpen(!isOpen)}}>close component</button>:<button className="close" onClick={()=>{setIsOpen(!isOpen)}}>open component</button>}
      {isOpen && <div className="steps">
          <div className="numbers">
            <div className={step >= 1 && "active"}>1</div>
            <div className={step >= 2 && "active"}>2</div>
            <div className={step == 3 && "active"}>3</div>
          </div>
          <p className="message">
            step{step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePreviousClick}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
        </div>
      }
    </Fragment>
  );
};

export default HomePage;
