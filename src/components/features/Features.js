import LeftFeature from "./leftfeature/LeftFeature";
import RightFeature from "./rightfeature/RightFeature";

const Feature = () => {
  return (
    <div
      style={{
        display: "flex",
        paddingTop: "100px",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <LeftFeature />
      <RightFeature />
    </div>
  );
};

export default Feature;
