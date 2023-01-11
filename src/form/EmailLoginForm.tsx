import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { CalmFormProvider } from "./components/CalmFormProvider";
import { TextInput } from "./components/TextInput";

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
        className="flex flex-col gap-2 p-4"
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

        {/* <label>
          Email
          <input
            {...register("email")}
            type="email"
            required
            className="border-2"
          />
        </label>
        <label>
          Password
          <input
            {...register("password")}
            type="password"
            required
            className="border-2"
          />
        </label> */}
        <input type={"submit"} className="border-2" />
      </CalmFormProvider>
    </div>
  );
};
