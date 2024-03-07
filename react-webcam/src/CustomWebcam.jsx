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

  // button to retake image
  const retake = () => {
    setImgSrc(null);
  };
  // mirror
  const [mirrored, setMirrored] = useState(false);
  return (
    // Finally, add a button to the component that will trigger the capture function when it is clicked and then display the captured image conditionally.
    <div className="container">
      {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam height={600} width={600} ref={webcamRef} mirrored={mirrored} />
      )}
      <div className="controls">
        <div>
          <input
            type="checkbox"
            checked={mirrored}
            onChange={(e) => setMirrored(e.target.checked)}
          />
          <label>Mirror</label>
        </div>
      </div>
      <div className="btn-container">
        {imgSrc ? (
          <button onClick={retake}>Retake photo</button>
        ) : (
          <button onClick={capture}>Capture photo</button>
        )}
      </div>
    </div>
  );
};

export default CustomWebcam;
