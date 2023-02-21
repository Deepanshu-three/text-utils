import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Alert alert={alert} />

      <div className="container my-3">
        {/* <BrowserRouter> */}
        <Navbar
          title="Dr. Killer "
          ele1="About us"
          mode={mode}
          toggleMode={toggleMode}
          showAlert={showAlert}
        />
        {/* <Routes> */}
        {/* <Route */}
        path="/"
        {/* element={ */}
        <TextForm
          heading="Enter your Text."
          mode={mode}
          showAlert={showAlert}
        />
        {/* // } */}
        {/* /> */}
        {/* // <Route path="/about" element={<About mode={mode} />} /> */}
        {/* // </Routes> */}
        {/* </BrowserRouter> */}
      </div>
      {/* <div className="container my-3">
        <TextForm heading="Enter ur query." mode={mode} />
        <About />
      </div> */}
    </>
  );
}

export default App;
