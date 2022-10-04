import React from "react";

// import components
import Homepage from "./pages/homepage";
import DefaultLayout from "./layouts/defaultLayout";

function App() {
  
  return (
    <div className="App">
    <DefaultLayout>
      <Homepage />
    </DefaultLayout>
    </div>
  );
}

export default App;
