import { FC, InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  formName: string;
  InputIcon?: JSX.Element;
}

export const TextInput: FC<TextInputProps> = ({
  label,
  formName,
  placeholder,
  InputIcon,
  ...props
}) => {
  const { register, setValue } = useFormContext();

  return (
    <div className="flex flex-col gap-1">
      <p className="px-2 text-lg font-bold">{label}</p>
      <div className="flex flex-row p-2 w-full text-md border border-2 rounded-full items-center justify-center">
        {InputIcon && (
          <span className="w-6 h-6 text-gray-400">{InputIcon}</span>
        )}
        <input
          className="w-full px-2"
          placeholder={placeholder}
          {...register(formName)}
          onChange={(newValue) => {
            setValue(formName, newValue.target.value, { shouldDirty: true });
            // onChange && onChange(newValue);
          }}
          {...props}
        />
      </div>
    </div>
  );
};
