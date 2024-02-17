import "./App.css";
import ColorGenerator from "./component/ColorGenerator/ColorGenerator";
import ImageSlider from "./component/ImageSlider/ImageSlider";
import StarRating from "./component/StarRating/StarRating";
import Accordion from "d:/Web Development/practice-test-projects/simple-accordion/src/component/Accordion/accordion";

function App() {
  return (
    <>
      {/* accordion component */}
      {/* <Accordion />
      <ColorGenerator />
      <StarRating /> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} />
    </>
  );
}

export default App;
