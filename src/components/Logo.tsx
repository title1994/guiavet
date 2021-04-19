import React from 'react';
import type { FC } from 'react';
import LOGOSVG from "src/assets/img/guiavet-logo.svg";

interface LogoProps {
  [key: string]: any;
}

const Logo: FC<LogoProps> = (props) => {
  return (
    <img
      alt="Logo"
      src={LOGOSVG}
      className="logo-img"
      {...props}
    />
  );
}

export default Logo;
