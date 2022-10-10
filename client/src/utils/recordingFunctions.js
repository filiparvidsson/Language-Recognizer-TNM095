
import MicRecorder from "mic-recorder-to-mp3";
//import axios from "axios";

// setRecorder returns a Micrecorder object with a default bitrate
// of 128. This is the default bitrate for the Mp3Recorder object.

export const setRecorder = (bitRate = 128) => {
    return new MicRecorder({ bitRate : bitRate });
};

// Start recording takes a recorder and setData function as arguments.
// It then calls the start method on the recorder object and sets the
// data to the result of the start method.
export const startRecording = (recorder, setData) => {
    recorder
        .start()
        .then(() => {
            console.log("recording started");
            setData(recorder);
        })
        .catch((e) => console.error(e));
}

// Stop recording takes a recorder along with setBlob and setBuffer
// functions as arguments. It then calls the stop method on the recorder
export const stopRecording = (recorder, setBlob, setBuffer = null) => {
    recorder
        .stop()
        .getMp3()
        .then(([buffer, blob]) => {
            //const blobURL = URL.createObjectURL(blob);
            console.log("recording stopped");
            setBlob(blob);

            if (setBuffer != null) {
                //console.log('hi');
                setBuffer(buffer);
                
            }
        })
        .catch((e) => console.log(e));

}

