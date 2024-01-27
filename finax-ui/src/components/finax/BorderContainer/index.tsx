import React from 'react';
import { Border, BorderLabel } from './style';

interface IBorderContainer {
  borderLabel?: string;
  children?: React.ReactNode;
  padding?: string;
  width?: string;
  height?: string;
  shadow?: boolean;
}

const BorderContainer: React.FC<IBorderContainer> = ({
  borderLabel,
  children,
  padding,
  width,
  height,
  shadow,
}: IBorderContainer) => {
  return (
    <Border padding={padding} width={width} height={height} shadow={shadow}>
      {borderLabel ? <BorderLabel>{borderLabel}</BorderLabel> : null}
      {children}
    </Border>
  );
};
export default BorderContainer;
