import { useForm } from "react-hook-form";
import { FC } from "react";
import { PasswordInput } from "./components/PasswordInput";
import { CalmFormProvider } from "./components/CalmFormProvider";
import { TextInput } from "./components/TextInput";
import { HiOutlineMail } from "react-icons/hi";
import { IconButton } from "../components/IconButton";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebaseInit";
import { SignupError } from "../utils/errors/SignupError";
import { ErrorChit } from "../components/ErrorChit";
import { BsFillPersonFill } from "react-icons/bs";

export interface EmailSignupFormProps {
  onSubmit: () => void;
}

interface EmailSignupFields {
  email: string;
  password: string;
}

export const EmailSignupForm: FC<EmailSignupFormProps> = ({ onSubmit }) => {
  const methods = useForm<EmailSignupFields>({
    shouldFocusError: true,
  });

  const [
    createUserWithEmailAndPassword,
    user,
    createUserLoading,
    createUserError,
  ] = useCreateUserWithEmailAndPassword(auth);

  const submitEmailSignup = async (data: EmailSignupFields) => {
    createUserWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div>
      <CalmFormProvider
        methods={methods}
        onSubmit={submitEmailSignup}
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
        {createUserError && (
          <ErrorChit>{SignupError(createUserError)}</ErrorChit>
        )}
        <span className="w-full pb-0.5 bg-gray-300 mb-6 mt-2"></span>
        <IconButton
          buttonText="Sign Up"
          handleClick={() => {}}
          loading={createUserLoading}
          icon={<BsFillPersonFill className="w-8 h-8" />}
          type="submit"
          variant="contained"
          className="font-semibold bg-blue-600 text-white p-2 w-72"
        />
      </CalmFormProvider>
    </div>
  );
};
