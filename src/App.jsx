import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  return (
    <>
      <div className="w-screen h-screen bg-slate-700 flex p-10">
        <Create />
        <Read  />
      </div>
    </>
  );
};

export default App;
