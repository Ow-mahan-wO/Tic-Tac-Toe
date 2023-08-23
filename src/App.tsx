import React from "react";

import "./App.css";
import { Tic_Tac_Toe } from "./Components/Tic_Tac_Toe";

const App: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center h-100v flex-col">
        <Tic_Tac_Toe />
      </div>
    </>
  );
};

export default App;
