import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import UserContextProvider from "./Context/UserContext.jsx";
import SearchContextProvider from "./Context/SearchContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "http://localhost:5001/api/v1";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <SearchContextProvider>
        <ToastContainer />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SearchContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
