import { Button, ButtonProps } from "@mui/material";
import { FC } from "react";

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
    <Button
      className={
        "grid grid-flow-col grid-cols-[50px_1fr] items-center justify-items-center rounded-xl border-2 px-1" +
        " " +
        className
      }
      onClick={handleClick}
      {...props}
    >
      {icon}
      <p className="pr-[50px]">{buttonText}</p>
    </Button>
  );
};
