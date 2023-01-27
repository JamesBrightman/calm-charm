import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  OutlinedInputProps,
} from '@mui/material';
import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';

export interface TextInputProps extends OutlinedInputProps {
  label: string;
  formName: string;
  InputIcon?: JSX.Element;
  validator?: (val: any) => boolean;
  validationMessage?: string;
}

export const TextInput: FC<TextInputProps> = ({
  label,
  formName,
  InputIcon,
  validator,
  validationMessage,
  required,
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
        {...register(formName, {
          validate: (value) => {
            if (validator) {
              return validator(value) || validationMessage;
            }
          },
          required: required || 'Field is required',
        })}
        onChange={(newValue) => {
          setValue(formName, newValue.target.value, {
            shouldDirty: true,
          });
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
