import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./ImageSlider.css";
export default function ImageSlider({ url, page = "1", limit }) {
  const [images, setImages] = useState([]);
  const [currentSlider, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  async function fetchImages(url) {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrev() {
    setCurrentSlide(
      currentSlider === 0 ? images.length - 1 : currentSlider - 1
    );
  }
  function handleNext() {
    setCurrentSlide(
      currentSlider === images.length - 1 ? 0 : currentSlider + 1
    );
  }

  console.log(images);
  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) return <div>loading data !! please wait</div>;

  if (errorMsg) return <div>error occurred !! {errorMsg}</div>;

  return (
    <div className="container">
      <FaArrowAltCircleLeft onClick={handlePrev} className="arrow arrow-left" />
      {images && images.length
        ? images.map((imageItem, idx) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.download_url}
              className={
                currentSlider === idx
                  ? "current-image"
                  : "current-image hide-current-image "
              }
            />
          ))
        : null}
      <FaArrowAltCircleRight
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicator">
        {images && images.length
          ? images.map((_, idx) => (
              <button
                key={idx}
                className={
                  currentSlider === idx
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(idx)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
