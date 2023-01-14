import {
  FormControl,
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
  ...props
}) => {
  const { register, setValue } = useFormContext();
  const [showPass, setShowPass] = useState<boolean>(false);

  return (
    <FormControl>
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
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
        required
        {...register(formName)}
        onChange={(newValue) => {
          setValue(formName, newValue.target.value, { shouldDirty: true });
        }}
        {...props}
      />
    </FormControl>
  );
};
