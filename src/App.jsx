import { Routes, Route } from "react-router-dom";

import { Landing, Test } from "./views/";

import { Footer } from "./components/";

export const App = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </>
  );
};
