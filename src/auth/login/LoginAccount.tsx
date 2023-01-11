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

export interface LoginAccountProps {
  toggleCreate: () => void;
}

export const LoginAccount: FC<LoginAccountProps> = ({ toggleCreate }) => {
  const nav = useNavigate();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((user) => {
      console.log(user);
      nav("/");
    });
  };

  const signInWithEmailPass = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password).then((user) => {
      console.log(user);
      nav("/");
    });
  };

  return (
    <div className="h-screen flex flex-col flex-1 bg-blue-500">
        <p className="flex items-center justify-center pt-8 text-4xl font-bold text-white">{"[ Branding ]"}</p>
      <motion.div
        className="w-full h-content mt-auto flex flex-col"
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="mb-[-1px]"
        >
          <path
            fill="white"
            fill-opacity="1"
            d="M0,256L48,229.3C96,203,192,149,288,122.7C384,96,480,96,576,112C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        <div className="flex flex-col gap-4 bg-white items-center justify-center">
          <p className="text-4xl font-extrabold px-4 bg-white">Welcome back</p>

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
            className="w-72 p-2"
          />
          </div>

          <p className="text-bold underline p-2" onClick={toggleCreate}>
            Don't have an account? Sign up here.
          </p>

          <p className="">Legal text TODO</p>
        </div>
      </motion.div>
    </div>
  );
};
