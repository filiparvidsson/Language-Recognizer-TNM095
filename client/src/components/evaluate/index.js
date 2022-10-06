import React, {useState, useEffect} from "react";

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

    // Function that reads the audio from audioPlayer and sends it to the server that return an image and then show the image
    const evaluate = async (e) => {
        // get the audio element
        const audio = document.getElementById("audioPlay");
        // get the audio data
        const audioData = audio.src;

        console.log("here it is:", JSON.stringify({audioData: audioData}));
        // send the audio data to the server as a form data
        fetch("http://localhost:5000/evaluate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({audioData: audioData})
        }).then(
            res => {
                console.log("here is the response: ", res);
                return res.json();
            }
        ).then(
            data => {
                console.log(data);
                // get the image element
                const image = document.getElementById("image");
                // set the image source to the image returned from the server
                image.src = data.image;
            }
        )
    }


        
    return (
        <div className="evaluate">
            <button onClick={() => evaluate()}> Evaluate </button>
        </div>
    );
}

// export the component
export default Evaluate;