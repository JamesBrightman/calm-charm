import {
  FormControl,
  FormHelperText,
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
  validator?: (val: any) => boolean;
}

export const TextInput: FC<TextInputProps> = ({
  label,
  formName,
  InputIcon,
  validator,
  ...props
}) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  console.log(errors[formName]);

  return (
    <FormControl>
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        error={!!errors[formName]}
        id="outlined-adornment-password"
        className="rounded-lg"
        type={props.type}
        endAdornment={
          <InputAdornment position="end">{InputIcon}</InputAdornment>
        }
        label={label}
        {...register(formName, { validate: validator })}
        onChange={(newValue) => {
          setValue(formName, newValue.target.value, { shouldDirty: true });
        }}
        {...props}
      />
      {!!errors[formName] && <FormHelperText error>{"ERROR"}</FormHelperText>}
    </FormControl>
  );
};
