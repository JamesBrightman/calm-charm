import { FC } from "react";

export interface IconButtonProps {
  icon: JSX.Element;
  buttonText: string;
  handleClick?: () => void;
}

export const IconButton: FC<IconButtonProps> = ({
  icon,
  buttonText,
  handleClick,
}) => {
  return (
    <button
      className="grid grid-flow-col grid-cols-[50px_1fr] items-center justify-items-center rounded-full border-2 px-1"
      onClick={handleClick}
    >
      {icon}
      <p className="pr-[50px]">{buttonText}</p>
    </button>
  );
};
