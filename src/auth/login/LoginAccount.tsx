import { FC, useCallback, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { IconButton } from "../../components/IconButton";
import { auth } from "../../firebase/firebaseInit";
import { EmailLoginForm } from "../../form/EmailLoginForm";
import { motion } from "framer-motion";
import { HeaderWave } from "../../components/HeaderWave";
import { InfoChit } from "../../components/InfoChit";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { ErrorChit } from "../../components/ErrorChit";
import { loginError } from "../../utils/errors/LoginError";

export interface LoginAccountProps {
  toggleCreate: () => void;
}

export const LoginAccount: FC<LoginAccountProps> = ({ toggleCreate }) => {
  const nav = useNavigate();

  const [signInWithGoogle, user, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const onSuccessfulLogin = useCallback(() => {
    if (user) {
      nav("/");
    }
  }, [nav, user]);

  useEffect(() => {
    onSuccessfulLogin();
  }, [onSuccessfulLogin]);

  return (
    <div className="h-screen flex flex-col flex-1 bg-blue-500">
      <p className="flex items-center justify-center pt-8 text-4xl font-bold text-white">
        {"[ Branding ]"}
      </p>
      <motion.div
        className="w-full h-content mt-auto flex flex-col"
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
      >
        <HeaderWave />
        <div className="flex flex-col gap-4 bg-white items-center justify-center">
          <p className="text-4xl font-extrabold px-4 bg-white">Welcome back.</p>
          <div className="flex flex-col items-center justify-center">
            <EmailLoginForm />
            <IconButton
              buttonText="Sign in with Google"
              icon={<FcGoogle className="w-8 h-8" />}
              handleClick={() => {
                signInWithGoogle();
              }}
              variant="outlined"
              loading={googleLoading}
              className="w-72 p-1 font-semibold text-gray-700"
            />
          </div>

          {googleError && <ErrorChit>{loginError(googleError)}</ErrorChit>}

          <InfoChit onClick={toggleCreate}>
            <div className="flex flex-row gap-1">
              <p>Don't have an account?</p>
              <p className="underline font-bold">Sign up here.</p>
            </div>
          </InfoChit>
          <p className="">Legal text TODO</p>
        </div>
      </motion.div>
    </div>
  );
};
