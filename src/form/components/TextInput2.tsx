import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { TextInputProps } from "./TextInput";

export const TextInput2: FC<TextInputProps> = ({
  label,
  formName,
  placeholder,
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
        placeholder={placeholder}
        {...register(formName)}
        onChange={(newValue) => {
          setValue(formName, newValue.target.value, { shouldDirty: true });
          // onChange && onChange(newValue);
        }}
      />
    </FormControl>
  );
};
