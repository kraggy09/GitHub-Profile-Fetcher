import React from "react";
import ReactDOM from "react-dom/client";
import Search from "./components/Search";
const App = () => {
  return (
    <div className="text-2xl ">
      <Search />
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
