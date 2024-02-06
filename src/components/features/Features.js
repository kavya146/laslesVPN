import LeftFeature from "./leftfeature/LeftFeature";
import RightFeature from "./rightfeature/RightFeature";
import "./Features.css";

const Feature = () => {
  return (
    <div>
      <div className="feature-style">
        <LeftFeature />
        <RightFeature />
      </div>
    </div>
  );
};

export default Feature;
