import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react"; // import useRef

const CustomWebcam = () => {
  const webcamRef = useRef(null); // create a webcam reference

  // created an imgSrc state variable  that will store the image data after a screenshot has been taken:
  const [imgSrc, setImgSrc] = useState(null); // initialize it

  // create a capture function
  //  created capture function  that will capture a screenshot by calling the getScreenshot method on a Webcam component reference.
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);
  return (
    <div className="container">
      <Webcam height={600} width={600} ref={webcamRef} />
    </div>
  );
};

export default CustomWebcam;
