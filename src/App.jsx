import React from "react";
import UseMemo from "./Components/hooks/UseMemo";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
