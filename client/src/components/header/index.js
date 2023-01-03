import React from "react";
// import neuralnetwork.png
import neuralnetwork from "../../assets/neuralnetwork.svg";

import './styles.css';

// Component named Header that takes in props between, puts the props between the header tags
const Header = (props) => {
    return (
        <header className="header">
            <img src={neuralnetwork} alt="neuralnetwork" />
            <h1>{props.title}</h1>
        </header>
    );
}



// export the component
export default Header;