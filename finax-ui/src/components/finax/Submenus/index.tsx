import React from 'react';
import { SubmenusUi } from './style';

interface IPropsSubmenus {
  children: React.ReactNode;
  showMenu?: boolean;
}

const Submenus: React.FC<IPropsSubmenus> = ({ children, showMenu }: IPropsSubmenus) => (
  <SubmenusUi showMenu={showMenu}>
    <ul>{children}</ul>
  </SubmenusUi>
);

export default Submenus;
