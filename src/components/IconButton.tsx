import { ButtonHTMLAttributes, FC } from "react";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  icon: JSX.Element;
  buttonText: string;
  handleClick?: () => void;
}

export const IconButton: FC<IconButtonProps> = ({
  icon,
  buttonText,
  handleClick,
  className, 
  ...props
}) => {
  return (
    <button
      className={"grid grid-flow-col grid-cols-[50px_1fr] items-center justify-items-center rounded-full border-2 px-1" + " " + className}
      onClick={handleClick}
      {...props}
    >
      {icon}
      <p className="pr-[50px]">{buttonText}</p>
    </button>
  );
};
