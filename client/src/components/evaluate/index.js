import React, {useState, useEffect} from "react";

import axios from "axios";

// import recordbutton component
import RecordButton from "../../components/recordButton";

import './styles.css';

// component named Evaluate
const Evaluate = () => {

    const [data, setData] = useState([{}]);

    

    // useEffect to fetch from server
    useEffect(() => {
        fetch("http://localhost:5000/members").then(
            res => {
                console.log("here is the response: ", res);
                return res.json();
            }
        ).then(
        data => {
            console.log(data);
            setData(data);
        }
    )  
    }, []);

    // Function that reads the audio from audioPlayer and sends it to the server that return an image and then show the image using axios
    const readAudio = () => {
        const audioPlayer = document.getElementById("audioPlay");
        const audio = audioPlayer.src;

        var aud = document.getElementById('audioPlay');
        fetch(aud.src)
        .then(response => response.blob())
        .then(
            blob => {

                const formData = new FormData();
                formData.append("audio_file", blob, 'file');

                axios.post("http://localhost:5000/evaluate", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(
                    res => {
                        console.log(res.data.Prediction[0]);
                        const text = document.getElementById("prediction");
                        text.innerHTML = "I believe you are talking " + res.data.Prediction[0] + " with " + res.data.Prediction[1] + "% certainty.";;
                        
                    }
                )

            }
        );


    }


        
    return (
        <div className="evaluate">
            <RecordButton onClick={() => readAudio()}> Evaluate </RecordButton>
        </div>
    );
}

// export the component
export default Evaluate;