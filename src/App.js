import "./styles.css";
import { Notes } from "./Components";
import "./Components/footerStyles.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Notes />} />
      </Routes>
    </div>
  );
}
