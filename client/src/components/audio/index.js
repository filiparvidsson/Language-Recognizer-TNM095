import React from "react";

import './styles.css';

// import evaluate
import Evaluate from "../../components/evaluate";

// component named AudioPlayer
const AudioPlayer = ({blob}) => {

    try {

        return (
            <div>
            <audio
                id="audioPlay"
                src={window.URL.createObjectURL(blob)}
                //src={blob}
                controls
                >              
            </audio>
            <Evaluate></Evaluate>
            </div>

    );

    }
    catch (err) {
        return (
            <div>
                <p>Recording in progress...</p>
            </div>
            
        );
    }
    
}

// export the component
export default AudioPlayer;