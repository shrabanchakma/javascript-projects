import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
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

  console.log(images);
  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) return <div>loading data !! please wait</div>;

  if (errorMsg) return <div>error occurred !! {errorMsg}</div>;

  return (
    <div className="container">
      <FaArrowAltCircleLeft className="arrow arrow-left" />
      {images && images.length
        ? images.map((imageItem) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.download_url}
              className="current-image"
            />
          ))
        : null}
      <FaArrowAltCircleRight className="arrow arrow-right" />
    </div>
  );
}
