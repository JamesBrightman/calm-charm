import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { TextInputProps } from "./TextInput";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export interface PasswordInputProps extends TextInputProps {}

export const PasswordInput: FC<PasswordInputProps> = ({
  label,
  formName,
  required,
  ...props
}) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  const [showPass, setShowPass] = useState<boolean>(false);

  return (
    <FormControl>
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        error={!!errors[formName]}
        id="outlined-adornment-password"
        className="rounded-lg "
        type={showPass ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => {
                setShowPass(!showPass);
              }}
            >
              {showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
        {...register(formName, {
          required: required || "Password is required",
        })}
        onChange={(newValue) => {
          setValue(formName, newValue.target.value, { shouldDirty: true });
        }}
        {...props}
      />
      {!!errors[formName] && (
        <FormHelperText error>
          {errors[formName]?.message as string}
        </FormHelperText>
      )}
    </FormControl>
  );
};
