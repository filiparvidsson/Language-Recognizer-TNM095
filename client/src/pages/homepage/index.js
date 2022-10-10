import React, {useEffect, useState} from "react";

// import functions from recordingFunctions.js
import {setRecorder, startRecording, stopRecording} from "../../utils/recordingFunctions";

// import styles
import "./styles.css";

//import components
import RecordButton from "../../components/recordButton";
import TextBox from "../../components/textBox";
import AudioPlayer from "../../components/audio";


// create a component named homepage
const Homepage = () => {

    const [data, setData] = useState(null);
    const [recorder, setRecording] = useState(null);

    // a state that tells if the user is recording or not
    const [isRecording, setIsRecording] = useState(false);
  
    useEffect(() => {
      setRecording(setRecorder());
     
      return () => {
        setRecording(null);
        setData(null);
      };
    }, []);
  
    const stop = () => {
      //console.log("hi");
      stopRecording(recorder, setData);

      setIsRecording(false);
    };
  
    const start = () => {
      //console.log("hi");
      startRecording(recorder, setData);

      // set isRecording to true
      setIsRecording(true);
    };

    return (
        <div className="homepage">
        <TextBox></TextBox>

        {/* if the user is recording, show the stop button, else show the record button */}
        {isRecording ? (
          <RecordButton onClick={stop}>Stop</RecordButton>
        ) : (
          <RecordButton onClick={start}>Record</RecordButton>
        )}
        
        <div className="predictLanguage"></div>
        {data ? <AudioPlayer blob={data} /> : null}
        <h3 id="prediction">Let us predict your language</h3>
        </div>
    );
}

// export the component
export default Homepage;