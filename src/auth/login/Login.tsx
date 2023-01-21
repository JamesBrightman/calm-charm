import { useState } from "react";
import { CreateAccountPage } from "./CreateAccountPage";
import { LoginAccountPage } from "./LoginAccountPage";

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
