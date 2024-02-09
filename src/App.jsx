import React, { useContext } from "react";
import Nav from "./components/Nav";
import Blogs from "./components/Blogs";
import BookMark from "./components/BookMark";

const App = () => {

  return (
    <div className=" container max-w-[75rem] mx-2 md:mx-auto mt-3">
      <Nav />
      <div className="flex justify-between">
        <Blogs />
        <BookMark />
      </div>
    </div>
  );
};


export default App;
