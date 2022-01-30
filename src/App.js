import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Email } from "./components/Email";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/email" element={<Email />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
