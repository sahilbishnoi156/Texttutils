import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Form from "./components/Form";
import Projects from "./components/Projects";
import Textarea from "./components/Textarea";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setmode] = useState("body-secondary");
  const [txtMode, settxtMode] = useState("dark");
  const toggleMode = () => {
    if (mode === "dark") {
      setmode("body-secondary");
      document.body.style.backgroundColor = "white";
      settxtMode("dark");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      settxtMode("light");
    }
  };
  const showAlert = (message, type) =>{
    setAlert(
      {
        msg:message,
        type:type
      }
    );
    setTimeout(()=>{
      setAlert(null);
    }, 2500);
  }
  return (
    <Router>
      <div id="main">
        <Navbar mode={mode} toggleMode={toggleMode} txtMode={txtMode} />
        <Alert alertObj={alert}/>
        <div
          className={`container my-5 bg-${mode} p-5 rounded-5`}
          style={{
            boxShadow: `.1px .1px 26px ${mode === "body-secondary" ? "grey" : "white"
              }`,
          }}
        >
          <Routes>
          <Route exact path="/login" element={<Form txtMode={txtMode}/>}>
          </Route>
          <Route exact path="/projects" element={<Projects txtMode={txtMode} mode={mode}/>}>
          </Route>
          <Route exact  path="/" element={<Carousel mode={mode} textMode={txtMode} />}>
          </Route>
          <Route exact  path="/textconverter" element={<Textarea heading="Enter your text below :" showAlert={showAlert} mode={mode} textMode={txtMode}/>}>
          </Route>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
