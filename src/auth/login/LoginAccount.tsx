import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { FC } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { IconButton } from "../../components/IconButton";
import { auth } from "../../firebase/firebaseInit";
import { EmailLoginForm } from "../../form/EmailLoginForm";
import { motion } from "framer-motion";
import { HeaderWave } from "../../components/HeaderWave";
import { InfoChit } from "../../components/InfoChit";

export interface LoginAccountProps {
  toggleCreate: () => void;
}

export const LoginAccount: FC<LoginAccountProps> = ({ toggleCreate }) => {
  const nav = useNavigate();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((user) => {
      nav("/");
    });
  };

  const signInWithEmailPass = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password).then((user) => {
      nav("/");
    });
  };

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
            <EmailLoginForm
              onSubmit={(email: string, password: string) => {
                signInWithEmailPass(email, password);
              }}
            />
            <IconButton
              buttonText="Sign in with Google"
              icon={<FcGoogle className="w-8 h-8" />}
              handleClick={signInWithGoogle}
              variant="outlined"
              className="w-72 p-1 font-semibold text-gray-700"
            />
          </div>
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
