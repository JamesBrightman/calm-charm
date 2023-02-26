import React, { FC, HTMLAttributes } from 'react';
import { HeaderWave } from './HeaderWave';

export const FooterWave: FC<HTMLAttributes<SVGSVGElement>> = ({ ...props }) => {
  return <HeaderWave className="mt-[-1px] rotate-180" {...props} />;
};
