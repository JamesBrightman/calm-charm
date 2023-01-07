import { Routes, Route } from "react-router-dom";

export const Authentication = () => {
  return (
    <Routes>
      <Route path="login" element={<div>{"Login TODO"}</div>} />
      <Route
        path="forgot-password"
        element={<div>{"Forgot Password TODO"}</div>}
      />
      <Route path="logout" element={<div>{"Logout TODO"}</div>} />
    </Routes>
  );
};
