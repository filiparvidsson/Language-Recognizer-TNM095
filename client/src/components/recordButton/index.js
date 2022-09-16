import React from "react";

// import styles
import "./styles.css";

// create a component named RecordButton using hocs
const RecordButton = ({ isRecording, onClick }) => {
    return (

        <button className="recordButton" onClick={onClick}>
            {isRecording ? "Stop" : "Record"}
        </button>

        
    );
    }

// export the component
export default RecordButton;