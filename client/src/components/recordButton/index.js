import React from "react";

// import styles
import "./styles.css";

// create a component named RecordButton using hocs that takes a onclick function as a prop
// and takes the props.children as text in the middle of the button
const RecordButton = ({ onClick, children }) => (
    <button className="recordButton" onClick={onClick}>
        {children}
    </button>
);

// export the component
export default RecordButton;