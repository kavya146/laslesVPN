import LeftFeature from "./leftfeature/LeftFeature";
import RightFeature from "./rightfeature/RightFeature";
import "./Features.css";

const Feature = () => {
  return (
    <div className="feature-style">
      <LeftFeature />
      <RightFeature />
    </div>
  );
};

export default Feature;
