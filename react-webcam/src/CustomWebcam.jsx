import Webcam from "react-webcam";
import { useRef } from "react"; // import useRef

const CustomWebcam = () => {
  const webcamRef = useRef(null); // create a webcam reference

  return (
    <div className="container">
      <Webcam height={600} width={600} ref={webcamRef} />
    </div>
  );
};

export default CustomWebcam;
