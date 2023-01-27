import React, { Routes, Route } from 'react-router-dom';
import { Login } from './login/Login';

export const Authentication = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route
        path="forgot-password"
        element={<div>{'Forgot Password TODO'}</div>}
      />
      <Route path="logout" element={<div>{'Logout TODO'}</div>} />
    </Routes>
  );
};
