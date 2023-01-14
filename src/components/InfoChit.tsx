import { FC, HTMLAttributes } from "react";

export interface InfoChitProps extends HTMLAttributes<HTMLDivElement> {}

export const InfoChit: FC<InfoChitProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={
        "flex flex-col gap-1 bg-stone-200 p-2 rounded-lg text-gray-700" +
        " " +
        className
      }
      {...props}
    >
      {children}
    </div>
  );
};
