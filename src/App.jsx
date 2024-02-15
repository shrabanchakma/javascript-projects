import "./App.css";
import ColorGenerator from "./component/ColorGenerator/ColorGenerator";
import StarRating from "./component/StarRating/StarRating";
import Accordion from "d:/Web Development/practice-test-projects/simple-accordion/src/component/Accordion/accordion";

function App() {
  return (
    <>
      {/* accordion component */}
      <Accordion />
      <ColorGenerator />
      <StarRating />
    </>
  );
}

export default App;
