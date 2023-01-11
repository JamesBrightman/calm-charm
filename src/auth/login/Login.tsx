import { useState } from "react";
import { CreateAccount } from "./CreateAccount";
import { LoginAccount } from "./LoginAccount";

export const Login = () => {
  const [showLoginPage, setShowLoginPage] = useState<boolean>(true);

  return (
    <div className="w-full h-screen flex flex-col bg-blue-500">
      {showLoginPage ? (
        <LoginAccount
          toggleCreate={() => {
            setShowLoginPage(false);
          }}
        />
      ) : (
        <CreateAccount
          toggleLogin={() => {
            setShowLoginPage(true);
          }}
        />
      )}
    </div>
  );
};
