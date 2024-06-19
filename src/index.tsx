import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import './styles/main.scss';
import App from "./App";
import { store } from "./app/store";
import Home from "./pages/Home";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import EpisodeList from "./pages/EpisodeList";
import EpisodeDetail from "./pages/EpisodeDetail";

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
          <Route path="/episodes" element={<EpisodeList />} />
          <Route path="/episode/:id" element={<EpisodeDetail />} />
        </Routes>
      </App>
    </Router>
  </Provider>
);
