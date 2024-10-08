import { useState, useEffect } from "react";
import s from "./Bubble.module.css";
import PropTypes from "prop-types";

const Bubble = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 50; // Скорость печатания в миллисекундах

  useEffect(() => {
    if (text.length === 0) return; // Если текст пустой, выходим из useEffect

    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        // Проверяем, не превышает ли индекс длину текста
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval); // Останавливаем интервал
      }
    }, typingSpeed);

    return () => clearInterval(interval); // Очищаем интервал, если компонент размонтируется
  }, [text]);

  return <div className={s.bubble}>{displayedText}</div>;
};

Bubble.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Bubble;
