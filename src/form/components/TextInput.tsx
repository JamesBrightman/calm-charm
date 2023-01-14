import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  OutlinedInputProps,
} from "@mui/material";
import { FC } from "react";
import { useFormContext } from "react-hook-form";

export interface TextInputProps extends OutlinedInputProps {
  label: string;
  formName: string;
  InputIcon?: JSX.Element;
}

export const TextInput: FC<TextInputProps> = ({
  label,
  formName,
  InputIcon,
  ...props
}) => {
  const { register, setValue } = useFormContext();

  return (
    <FormControl>
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        className="rounded-lg "
        type={props.type}
        endAdornment={
          <InputAdornment position="end">{InputIcon}</InputAdornment>
        }
        label={label}
        {...register(formName)}
        onChange={(newValue) => {
          setValue(formName, newValue.target.value, { shouldDirty: true });
        }}
        {...props}
      />
    </FormControl>
  );
};
