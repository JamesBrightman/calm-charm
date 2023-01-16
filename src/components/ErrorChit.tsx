import { FC, HTMLAttributes } from "react";
import { MdError } from "react-icons/md";

export interface ErrorChitProps extends HTMLAttributes<HTMLDivElement> {}

export const ErrorChit: FC<ErrorChitProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={
        "flex flex-row gap-2 items-center justify-center text-center bg-red-200 p-2 rounded-lg text-black font-semibold" +
        " " +
        className
      }
      {...props}
    >
      <MdError className="w-8 h-8 text-red-500" />
      {children}
    </div>
  );
};
