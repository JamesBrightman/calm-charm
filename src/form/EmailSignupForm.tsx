import { useForm } from "react-hook-form";
import { FC } from "react";

export interface EmailSignupFormProps {
  onSubmit: () => void;
}

export const EmailSignupForm: FC<EmailSignupFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 p-4"
      >
        <label>
          First name
          <input {...register("fistName")} className="border-2" />
        </label>
        <label>
          Last name
          <input {...register("lastName")} className="border-2" />
        </label>
        <input type={"submit"} />
      </form>
    </div>
  );
};
