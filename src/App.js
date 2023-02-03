// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Accordian from "./components/Accordian";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [mode_red, setMode_red] = useState("danger");
  const [mode_green, setMode_green] = useState("primary");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  let toggle = () => {
    // console.log('clicked')
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert(" Dark mode enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode enable", "success");
    }
    if (mode_red === "danger") {
      setMode_red("primary");
      document.body.style.backgroundColor = "yellow";
      showAlert(" red mode enable", "danger");
    } else {
      setMode_red("danger");
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode enable", "success");
    }
    if (mode_green === "primary") {
      setMode_green("danger");
      document.body.style.backgroundColor = "green";
      showAlert(" green mode enable", "success");
    } else {
      setMode_green("primary");
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode enable", "success");
    }
  };
  return (
    <>
      <Navbar
        title="Pankaj"
        number={82.5}
        mode={mode}
        toggleMode={toggle}
        showAlert={showAlert}
      />

      {/* always use exact instead of path ,so react won't confuse between pages */}

      <Todo
        mode={mode}
        mode_red={mode_red}
        mode_green={mode_green}
        showAlert={showAlert}
      />
      <Accordian />
      <Alert alert={alert} />
      {/* <Routes>
        <Route exact path="/Alert" element= {<Alert alert={alert}/>} />
        
        <Route exact path="/Home" element={
          <Accordian />}/>
        
        <Route exact path="/todo" element={
          <Todo
            mode={mode}
            mode_red={mode_red}
            mode_green={mode_green}
            showAlert={showAlert}
          />}/>
        
      </Routes> */}
    </>
  );
}

export default App;
