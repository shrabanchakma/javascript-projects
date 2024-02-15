import { useState } from "react";
import { CiStar } from "react-icons/ci";
import "./StarRating.css";
export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  console.log(noOfStars);
  function handleOnClick(currentIdx) {
    setRating(currentIdx);
  }

  function handleMouseMove(currentIdx) {
    setHover(currentIdx);
  }

  function handleMouseLeave(currentIdx) {
    setHover(currentIdx);
  }

  return (
    <div
      className="star-rating"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {[...Array(noOfStars)].map((_, idx) => {
        idx++;
        return (
          <CiStar
            style={{
              fontSize: "3rem",
            }}
            className={idx <= (hover || rating) ? "active" : "inactive"}
            key={idx}
            onClick={() => handleOnClick(idx)}
            onMouseMove={() => handleMouseMove(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
          />
        );
      })}
    </div>
  );
}
