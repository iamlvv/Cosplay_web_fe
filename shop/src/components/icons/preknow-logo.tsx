import Image from 'next/image';
import React, { FC } from 'react';
import logo from '../../assets/costume/logo.svg';
type PreknowLogoProps = {
  width?: number;
  height?: number;
  className?: string;
};

const PreknowLogo: FC<PreknowLogoProps> = ({
  width = 181,
  height = 46,
  className,
}) => {
  return (
    <Image
      src={logo}
      alt="logo"
      width={width}
      height={height}
      className={className}
    />
  );
};

export default PreknowLogo;
