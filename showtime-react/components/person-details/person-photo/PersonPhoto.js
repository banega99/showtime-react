import classes from "./person-photo.module.css";
import Image from "next/image";
import { useRef } from "react";
import { createPortal } from "react-dom";

export default function PersonPhoto({
  image,
  images,
  setShowGallery,
  showGallery,
}) {
  const doc = document;
  const blur = useRef();
  const docRef = useRef(doc);

  function handleShowGallery() {
    setShowGallery((prev) => {
      const curr = !prev;
      if (curr) {
        docRef.current.body.style.overflowY = "hidden";
        blur.current.addEventListener("click", handleShowGallery);
      } else {
        docRef.current.body.style.overflowY = "auto";
        blur.current.removeEventListener("click", handleShowGallery);
      }
      return curr;
    });
  }

  return (
    <>
      <div onClick={handleShowGallery} className={classes.photo}>
        <Image
          priority
          src={image}
          width={200}
          height={300}
          alt="person image"
        />
        {!!images && (
          <div className={classes[`img-cover`]}>
            SHOW {images.length > 1 ? "GALLERY" : "PHOTO"}
          </div>
        )}
      </div>
      <div
        ref={blur}
        className={
          showGallery ? classes.blur + " " + classes.show : classes.blur
        }
      ></div>
      ,
    </>
  );
}
