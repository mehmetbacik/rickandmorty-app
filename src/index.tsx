import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import './styles/main.scss';
import App from "./App";
import { store } from "./app/store";
import Home from "./pages/Home";
import CharacterListPage from "./pages/CharacterListPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import EpisodeListPage from "./pages/EpisodeListPage";
import EpisodeDetailPage from "./pages/EpisodeDetailPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<CharacterListPage />} />
          <Route path="/detail/:id" element={<CharacterDetailPage />} />
          <Route path="/episodes" element={<EpisodeListPage />} />
          <Route path="/episode/:id" element={<EpisodeDetailPage />} />
        </Routes>
      </App>
    </Router>
  </Provider>
);
