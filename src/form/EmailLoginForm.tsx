import { FC } from "react";
import { useForm } from "react-hook-form";
import { IconButton } from "../components/IconButton";
import { CalmFormProvider } from "./components/CalmFormProvider";
import { MdLogin } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FiLock } from "react-icons/fi";
import { TextInput } from "./components/TextInput";
import { PasswordInput } from "./components/PasswordInput";

export interface EmailLoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

interface EmailLoginFields {
  email: string;
  password: string;
}

export const EmailLoginForm: FC<EmailLoginFormProps> = ({ onSubmit }) => {
  const methods = useForm<EmailLoginFields>({
    shouldFocusError: true,
  });

  const submitEmailLogin = (data: EmailLoginFields) => {
    console.log(data);
    onSubmit(data.email, data.password);
  };

  return (
    <div>
      <CalmFormProvider
        methods={methods}
        onSubmit={submitEmailLogin}
        className="flex flex-col gap-2 p-4 w-full"
      >
        <TextInput
          formName="email"
          label="Email"
          InputIcon={<HiOutlineMail className="w-6 h-6 m-[8px]" />}
          required
        />
        <PasswordInput formName="login-password" label="Password" />
        <span className="w-full pb-0.5 bg-gray-300 mb-6 mt-2"></span>
        <IconButton
          buttonText="Sign In"
          handleClick={() => {}}
          icon={<MdLogin className="w-8 h-8" />}
          type="submit"
          className="text-lg font-bold bg-blue-600 text-white p-4 w-72"
        />
      </CalmFormProvider>
    </div>
  );
};
