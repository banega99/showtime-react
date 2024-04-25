import { useRef, useState } from "react";
import classes from "./dropdown-menu.module.css";

export default function DropdownMenu({ label, type, children }) {
  const [showDrop, setShowDrop] = useState(false);
  const docRef = useRef(document);

  function handleHide(e) {
    if (
      !e.target.closest(`.${classes.show}`) &&
      !e.target.classList.contains(classes.link)
    ) {
      setShowDrop(false);
    }
  }

  return (
    <div className={type == "sort" ? classes.dropdownSort : classes.dropdown}>
      <a
        className={classes.link}
        onClick={() => {
          setShowDrop((prev) => {
            const curr = !prev;
            if (curr) docRef.current.addEventListener("click", handleHide);
            else docRef.current.removeEventListener("click", handleHide);
            return curr;
          });
        }}
      >
        {label}
      </a>
      <ul className={showDrop ? classes.show : null}>{children}</ul>
    </div>
  );
}
