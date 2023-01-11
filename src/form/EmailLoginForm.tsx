import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { IconButton } from "../components/IconButton";
import { CalmFormProvider } from "./components/CalmFormProvider";
import { TextInput } from "./components/TextInput";
import {MdLogin} from "react-icons/md";

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
    console.log(data)
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
          placeholder={"Enter email address..."}
          required
        />

        <TextInput
          formName="password"
          label="Password"
          placeholder={"Enter your password..."}
          required
        />

         <span className="w-full pb-0.5 bg-gray-300 mb-6 mt-2"></span>

        <IconButton buttonText="Sign In" handleClick={() => {}} icon={<MdLogin className="w-8 h-8"/>} type="submit" className="text-lg font-bold bg-blue-600 text-white p-4 w-72"/>
      </CalmFormProvider>
    </div>
  );
};
