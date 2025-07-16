// import React from "react";

// import Dashboard from "./Dashboard";
// import TopBar from "./TopBar";

// const Home = () => {
//   return (
//     <> <h1 style={{ color: "black" }}>Hello</h1> {/* TEMP TEST */}
//       <TopBar />
//       <Dashboard />
//     </>
//   );
// };

// export default Home;

// src/components/Home.js
import React from "react";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <>
      <TopBar/>
      <Dashboard/>
      
    </>
  );
};

export default Home;
