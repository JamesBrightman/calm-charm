import React, { useState } from 'react';
import { CreateAccountPage } from '../../auth/pages/CreateAccountPage';
import { LoginAccountPage } from '../../auth/pages/LoginAccountPage';

export const Login = () => {
  const [showLoginPage, setShowLoginPage] = useState<boolean>(true);

  return (
    <div className="w-full h-screen flex flex-col bg-blue-500">
      {showLoginPage ? (
        <LoginAccountPage
          toggleCreate={() => {
            setShowLoginPage(false);
          }}
        />
      ) : (
        <CreateAccountPage
          toggleLogin={() => {
            setShowLoginPage(true);
          }}
        />
      )}
    </div>
  );
};
