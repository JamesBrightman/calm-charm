import { FC, InputHTMLAttributes, useEffect } from "react";
import { useFormContext } from "react-hook-form";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  formName: string;
  placeholder?: string;
}

export const TextInput: FC<TextInputProps> = ({
  label,
  formName,
  placeholder,
  ...props
}) => {
  const { register, setValue } = useFormContext();

  return (
    <div className="flex flex-col gap-1">
      <p className="px-2 text-lg font-bold">{label}</p>
      <input
        className="p-2 text-md border border-2 rounded-full"
        placeholder={placeholder}
        {...register(formName)}
        {...props}
        onChange={(newValue) => {
          setValue(formName, newValue.target.value, { shouldDirty: true });
          // onChange && onChange(newValue);
        }}
      />
    </div>
  );
};
