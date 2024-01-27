import React from 'react';
import { ContainerUi } from './style';
import { useFinax } from '../../../hooks/use-config';

interface IPropsContainer {
  children: React.ReactNode;
}

const Container: React.FC<IPropsContainer> = ({ children }: IPropsContainer) => {
  const { showMenu } = useFinax();
  

  return <ContainerUi showMenu={showMenu}>{children}</ContainerUi>;
};

export default Container;
