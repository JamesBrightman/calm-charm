import React, { FC, HTMLAttributes } from 'react';

export const HeaderWave: FC<HTMLAttributes<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="mb-[-1px]"
      {...props}
    >
      <path
        fill="white"
        fillOpacity="1"
        d="M0,256L48,229.3C96,203,192,149,288,122.7C384,96,480,96,576,112C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );
};
