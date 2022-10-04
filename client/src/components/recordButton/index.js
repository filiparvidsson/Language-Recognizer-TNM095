import React from "react";

// import styles
import "./styles.css";

// create a component named RecordButton using hocs
const RecordButton = ({ isRecording }) => {
    return (

        <button className="recordButton">
            {isRecording ? "Stop" : "Record"}
        </button>

        
    );
    }

// export the component
export default RecordButton;