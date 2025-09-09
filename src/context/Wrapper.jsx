import React, { createContext, useState } from "react";
export const todoContext = createContext(null);
const Wrapper = (props) => {
  const [todo, settodo] = useState([
    { id: 1, title: "BLANK TASK...", iscompleted: false },
  ]);
  return (
    <todoContext.Provider value={[todo, settodo]}>
      {props.children}
    </todoContext.Provider>
  );
};

export default Wrapper;
