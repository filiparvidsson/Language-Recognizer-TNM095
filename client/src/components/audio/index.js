import React from "react";

import './styles.css';

// component named AudioPlayer
const AudioPlayer = ({blob}) => {

    try {

        return (
            <audio
                id="audioPlay"
                src={window.URL.createObjectURL(blob)}
                //src={blob}
                controls
                >              
            </audio>
    );

    }
    catch (err) {
        return (
            console.log(err)
        );
    }
    
}

// export the component
export default AudioPlayer;