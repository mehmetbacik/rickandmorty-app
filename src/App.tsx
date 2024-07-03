import React from "react";
import Header from "./components/Header/Header";

const App: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default App;
