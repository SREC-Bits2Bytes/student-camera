import React from "react";
import Webcam from "react-webcam";
import "./App.css";

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    console.log(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <div className="Cam">
      <Webcam
        audio={false}
        height={710}
        width={1600}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture photo</button>
      {imgSrc && <img src={imgSrc} />}
    </div>
  );
};

// ReactDOM.render(<WebcamCapture />, document.getElementById("root"));

export default WebcamCapture;
