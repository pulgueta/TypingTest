import { Routes, Route } from "react-router-dom";

import { Landing } from "./views/";

import { Footer } from "./components/";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </>
  );
};
