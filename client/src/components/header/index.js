import React from "react";
// import neuralnetwork.png
import neuralnetwork from "../../assets/neuralnetwork.svg";

import './styles.css';

// Component named Header
const Header = () => {
    return (
        <div className="header">
            <img src={neuralnetwork} alt="neuralnetwork" />
        <h1>Language Recognizer</h1>
        </div>
        
    );
}


// export the component
export default Header;