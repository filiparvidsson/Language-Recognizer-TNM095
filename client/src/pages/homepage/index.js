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
    };
  
    const start = () => {
      //console.log("hi");
      startRecording(recorder, setData);
    };

    return (
        <div className="homepage">
        <TextBox></TextBox>
        <button onClick={() => start()}> Start</button>
        <button onClick={() => stop()}> Stop </button>
        <img id="image" src="" alt="image" />
        
        {data ? <AudioPlayer blob={data} /> : null}
        </div>
    );
}

// export the component
export default Homepage;