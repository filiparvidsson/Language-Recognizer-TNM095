import React from "react";
//import components
import Header from "../../components/header";

// import styles
import "./styles.css";

// create a component named DefaultLayout which takes props and has a header on top
const DefaultLayout = props => {
    return (
        <div>
            {/* Header component with the title as props */}
            <Header title="Language Recognizer" />
            <div className="main">
                {props.children}
            </div>
        </div>
    );
    }

// export the component
export default DefaultLayout;
