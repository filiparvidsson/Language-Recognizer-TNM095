import React, {useEffect, useState} from "react";

// import styles
import "./styles.css";

//import components
import RecordButton from "../../components/recordButton";
import TextBox from "../../components/textBox";


// create a component named homepage
const Homepage = () => {

    const [data, setData] = useState([{}]);

    useEffect(() => {
        fetch("/members")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                console.log(data)
            });
    }, []);

    return (
        <div className="homepage">
        <TextBox></TextBox>
        <RecordButton />
        </div>
    );
}

// export the component
export default Homepage;