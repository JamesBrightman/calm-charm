import { LoadingButton } from '@mui/lab';
import { ButtonProps } from '@mui/material';
import React, { FC } from 'react';

export interface IconButtonProps extends ButtonProps {
  icon: JSX.Element;
  loading?: boolean;
  buttonText: string;
  handleClick?: () => void;
}

export const IconButton: FC<IconButtonProps> = ({
  icon,
  loading,
  buttonText,
  handleClick,
  className,
  ...props
}) => {
  return (
    <LoadingButton
      className={
        'grid grid-flow-col grid-cols-[50px_1fr] items-center justify-items-center rounded-xl border-2 px-1' +
        ' ' +
        className +
        ' ' +
        `${loading ? 'bg-opacity-50 bg-gray-400' : 'bg-opacity-100'}`
      }
      {...props}
      onClick={handleClick}
      loading={loading}
      loadingPosition="end"
    >
      {icon}
      <p className="pr-[50px]">{buttonText}</p>
    </LoadingButton>
  );
};
