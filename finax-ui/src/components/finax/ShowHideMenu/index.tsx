import React from 'react';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { ButtonShowHideMenu } from './style';

type ShowHideMenuProps = {
  showMenu?: boolean;
  handleSetShowMenu: () => void;
};

const ShowHideMenu: React.FC<ShowHideMenuProps> = ({ showMenu, handleSetShowMenu }: ShowHideMenuProps) => (
  <div>
    <ButtonShowHideMenu type="button" onClick={handleSetShowMenu}>
      {showMenu ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
    </ButtonShowHideMenu>
  </div>
);

export default ShowHideMenu;
