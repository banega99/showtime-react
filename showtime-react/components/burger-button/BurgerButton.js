import classes from "./burger-button.module.css";
import { useState, useRef, useEffect } from "react";

export default function BurgerButton({ setShowNav }) {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  window.addEventListener("resize", handleResize);

  function handleResize() {
    if (window.innerWidth < 768) setShow(true);
    else setShow(false);
  }

  useEffect(() => {
    handleResize();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShowNav((prev) => !prev);
  };

  return (
    show && (
      <div
        className={`${classes.burger} ${isOpen ? classes.open : ""}`}
        onClick={toggleMenu}
      >
        <div className={classes.burgerItem}></div>
        <div className={classes.burgerItem}></div>
        <div className={classes.burgerItem}></div>
      </div>
    )
  );
}
