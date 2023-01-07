import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Test } from "./Test";
import { Authentication } from "./Authentication";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth/*" element={<Authentication />} />
        <Route path="/" element={<HomePage />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};
