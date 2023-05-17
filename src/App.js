import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar.js';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
// import About from './Components/About';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  const [radioText, setRadiotext] = useState("Enable Dark Mode")
  const [radioText2, setRadioText2] = useState("Enable Green Mode")

  const [alrt, setAlrt] = useState(null)
  const showAlert = (message, type) => {
    setAlrt({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlrt(null)
    }, 1500);
  }

  const toggleMode = () => {

    if (mode === "light") {
      setMode("dark");
      setRadiotext("Enable Light Mode")
      showAlert("Dark Mode is Enabled", "light")
      document.body.style.backgroundColor = "#535353";
      document.title = "TextUtils- Dark Mode";
      // document.body.style.cssText = "background-color: #535353;";
    }
    else {
      setMode("light");
      setRadiotext("Enable Dark Mode")
      showAlert("Light Mode is Enabled", "success")
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils- Light Mode";
      // document.body.style.cssText = "background-color: white;";
    }
  }

  const toggleGMode = () => {
    if (mode === "light") {
      setMode("dark");
      setRadioText2("Enable Light Mode")
      showAlert("Green Mode is Enabled", "success")
      document.body.style.backgroundColor = "Green"
      document.title = "TextUtils- Green Mode";
    }
    else {
      setMode("light");
      setRadioText2("Enable Green Mode")
      showAlert("Light Mode is Enabled", "light")
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils- Light Mode";
    }
  }

  return (

    <>
      {/* /users--> Component 1
    /users/home --> --> Components 2 */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleGMode={toggleGMode} about="About" lble={radioText} lble2={radioText2} />
      <div className="container my-3">
        <Alert checkHeading={alrt} />
      </div>
      <div className="container mx-10 my-4">

        <Textform heading="Enter the text to Analyze Below" mode={mode} showAlert={showAlert} />

        {/* <Routes> */}
        {/* <Route exact path='/' element={<Textform heading="Enter the text to Analyze Below" mode={mode} showAlert={showAlert} />} /> */}
        {/* <Route exact path='/about' element={<About />} /> */}
        {/* </Routes> */}

      </div>
    </>
  );
}

export default App;