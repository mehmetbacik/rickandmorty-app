import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import Home from "./pages/Home";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </App>
    </Router>
  </Provider>
);
