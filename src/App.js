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
  const [flexDirection, setFlexDirection] = useState(window.innerWidth < 1000 ?"column":"row");
  const [passInfo, setPassInfo] = useState(window.innerWidth < 1000 ?"":"(must contain one uppercase, lowercase, number and special character)")
  window.addEventListener("resize", () =>{
    if (window.innerWidth < 1000) {
      setFlexDirection("column");
      setPassInfo("");
    }
    else{
      setFlexDirection("row");
      setPassInfo('(must contain one uppercase, lowercase, number and special character)');
    }
  });

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
      <div id="main" style={{
        boxSizing:"border-box",
      }}>
        <Navbar mode={mode} toggleMode={toggleMode} txtMode={txtMode} flexDirection={flexDirection}/>
        <div className="container my-1" style={{
          height:"30px",
          width:"100%"
        }}>
        <Alert alertObj={alert}/>
        </div>
        <div style={{
          boxSizing:"border-box",
          padding:"20px"
        }}>
        <div
          className={`container my-5 bg-${mode} p-4 rounded-5 `}
          style={{
            boxShadow: `.1px .1px 26px ${mode === "body-secondary" ? "grey" : "white"
              }`
          }}
        >
          <Routes>
          <Route exact path="/Texttutils/login" element={<Form txtMode={txtMode} passInfo={passInfo}/>}>
          </Route>
          <Route exact path="/Texttutils/projects" element={<Projects txtMode={txtMode} mode={mode}/>}>
          </Route>
          <Route exact  path="/Texttutils/" element={<Carousel mode={mode} textMode={txtMode} />}>
          </Route>
          <Route exact  path="/Texttutils/textconverter" element={<Textarea heading="Enter your text below :" showAlert={showAlert} mode={mode} textMode={txtMode} flexDirection={flexDirection}/>}>
          </Route>
        </Routes>
        </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
