// import first_bubble from "../../bubbles/first_bubble.png";
// import blank_bubble_remove from "../../bubbles/blank_bubble_remove.png";
import pixel_speech_bubble from "../../bubbles/pixel_speech_bubble.gif";
import s from "./Riddler.module.css";
// import { ReactTyped } from "react-typed";

const Riddler = () => {
  return (
    <div className={s.wrap}>
      {/* ----- Speech Bubble ----- */}
      {/* <img className={s.bubble} src={blank_bubble_remove} alt="bubble" />
      <p className={s.text}>Hi there, young man</p> */}
      <img className={s.bubble} src={pixel_speech_bubble} alt="bubble" />

      {/* ----- Pumpkin ----- */}
      <div className={s.pumpkinWrap}>
        <div className={s.pumpkin}></div>
      </div>
      {/* <ReactTyped strings={["My React App"]} typeSpeed={100} /> */}
    </div>
  );
};

export default Riddler;
