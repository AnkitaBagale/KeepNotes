import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { NotesContextProvider } from "./Context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <NotesContextProvider>
      <Router>
        <App />
      </Router>
    </NotesContextProvider>
  </StrictMode>,
  rootElement
);
