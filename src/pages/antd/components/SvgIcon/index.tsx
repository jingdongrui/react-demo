import React from 'react';

interface SvgIconProps {
  src: string;
  alt: string;
  [key: string]: any;
}

const SvgIcon: React.FC<SvgIconProps> = ({ src, alt, ...rest }) => {
  return <img src={src} alt={alt} {...rest} />;
};

export default SvgIcon;
