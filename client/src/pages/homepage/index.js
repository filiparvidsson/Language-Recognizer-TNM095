import React from "react";

// import styles
import "./styles.css";

//import components
import RecordButton from "../../components/recordButton";
import TextBox from "../../components/textBox";


// create a component named homepage
const Homepage = () => {
    return (
        <div className="homepage">
        <TextBox></TextBox>
        <RecordButton />
        </div>
    );
}

// export the component
export default Homepage;