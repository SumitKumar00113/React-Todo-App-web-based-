import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";
import Wrapper from "./context/Wrapper";

const App = () => {
  return (
    <>
    <Wrapper>
     <div className="w-screen h-screen bg-slate-700 flex flex-col md:flex-row p-2 md:p-10">
        <Create />
        <Read  />
      </div>
      </Wrapper>
    </>
  );
};

export default App;
