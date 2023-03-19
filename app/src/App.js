import "./App.css";
import { Routes, Route } from "react-router-dom";
import Loger from "./components/Loger/Loger";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Loger/>}/>
         {/* <Route path="/login" element={<Loger />} /> */}
        <Route path="/sign-up" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
