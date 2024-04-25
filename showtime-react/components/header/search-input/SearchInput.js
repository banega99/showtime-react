import classes from "./search-input.module.css";

import searchIconGray from "../../../assets/images/lupaSiva.png";
import searchIconRed from "../../../assets/images/lupaCrvena.png";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchInput({
  searchTerm,
  setSearchTerm,
  type,
  setType,
  setShow,
}) {
  const [hover, setHover] = useState(false);
  const [showDrop, setShowDrop] = useState(false);
  const [expand, setExpand] = useState(false);
  const router = useRouter();
  const btn = useRef();
  const input = useRef();
  const docRef = useRef(document);

  docRef.current.addEventListener("click", handleDocClick);

  // type = type === "All" ? "multi" : type.toLowerCase();
  function handleDocClick(e) {
    if (!expand) return;
    if (e.target.closest(`.${classes.form}`)) return;
    setExpand(false);
  }

  function handleBlur(e) {
    setTimeout(() => {
      e.target.value = null;
      setSearchTerm(e.target.value);
      setShow(false);
    }, 200);
    // console.log(e.target);
    // e.target.value = null;
    // setSearchTerm(e.target.value)
    // setShow(false);
  }

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  function handleHover() {
    setHover((prev) => !prev);
  }

  function handleShowDrop() {
    console.log("showDrop");
    setShowDrop((prev) => !prev);
  }

  function handleCLick(e) {
    setType(e.target.innerText);
    setShowDrop((prev) => !prev);
  }

  function handleNavigation() {
    if (!!searchTerm) {
      setShow(false);
      router.push(
        `/search?name=${
          type === "All" ? "multi" : type.toLowerCase()
        }&searchTerm=${searchTerm}&page=1`
      );
      input.current.value = null;
    }
  }

  function handleExpand() {
    setExpand(true);
    handleNavigation();
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleNavigation();
      }}
      className={
        expand ? classes.form + " " + classes[`form-expand`] : classes.form
      }
    >
      <div
        ref={btn}
        className={classes.btn + " " + classes[`type-btn`]}
        onClick={handleShowDrop}
      >
        {type}
      </div>
      <ul
        className={
          showDrop
            ? classes[`dropdown-menu`] + " " + classes.show
            : classes[`dropdown-menu`]
        }
      >
        <li onClickCapture={handleCLick}>All</li>
        <li onClick={handleCLick}>Movie</li>
        <li onClick={handleCLick}>Person</li>
      </ul>
      <input
        ref={input}
        id="search-input"
        type="text"
        placeholder="Search SHOWTIME"
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      <button
        className={classes.btn}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onClick={handleExpand}
        type="button"
      >
        <img
          src={hover ? searchIconRed.src : searchIconGray.src}
          alt="search-icon"
          width="30px"
        />
      </button>
    </form>
  );
}
