import { FC, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IconButton } from "../components/IconButton";
import { CalmFormProvider } from "./components/CalmFormProvider";
import { MdLogin } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { TextInput } from "./components/TextInput";
import { PasswordInput } from "./components/PasswordInput";
import { auth } from "../firebase/firebaseInit";
import { AuthError } from "@firebase/auth";
import { useNavigate } from "react-router-dom";
import { ErrorChit } from "../components/ErrorChit";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { loginError } from "../utils/errors/LoginError";

export interface EmailLoginFormProps {}

interface EmailLoginFields {
  email: string;
  password: string;
}

export const EmailLoginForm: FC<EmailLoginFormProps> = () => {
  const nav = useNavigate();
  const methods = useForm<EmailLoginFields>({
    shouldFocusError: true,
  });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSuccessfulLogin = useCallback(() => {
    if (user) {
      nav("/");
    }
  }, [nav, user]);

  useEffect(() => {
    onSuccessfulLogin();
  }, [onSuccessfulLogin]);

  const submitEmailLogin = async (data: EmailLoginFields) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div>
      <CalmFormProvider
        methods={methods}
        onSubmit={submitEmailLogin}
        className="flex flex-col gap-2 p-4 w-full items-center justify-center"
      >
        <TextInput
          formName="email"
          label="Email"
          InputIcon={<HiOutlineMail className="w-6 h-6 m-[8px]" />}
          required
          validationMessage="Invalid email address"
        />
        <PasswordInput formName="password" label="Password" />

        {error && <ErrorChit>{loginError(error)}</ErrorChit>}

        <span className="w-full pb-0.5 bg-gray-300 mb-6 mt-2"></span>
        <IconButton
          buttonText="Sign In"
          handleClick={() => {}}
          loading={loading}
          icon={<MdLogin className="w-8 h-8" />}
          type="submit"
          variant="contained"
          className="font-semibold bg-blue-600 text-white p-2 w-72"
        />
      </CalmFormProvider>
    </div>
  );
};
