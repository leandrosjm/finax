import { Tooltip } from '@material-ui/core';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useFinax } from '../../../hooks/use-config';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { LiOption } from './style';

interface IPropsMenuOption {
  icon?: JSX.Element;
  to?: string;
  text: string;
  showMenu: boolean;
  viewActive?: boolean;
  titleAccordion?: boolean;
  external?: boolean;
  externalLink?: string;
}

const MenuOption: React.FC<IPropsMenuOption> = ({
  icon,
  to,
  text,
  showMenu,
  viewActive,
  titleAccordion,
  external,
  externalLink,
}: IPropsMenuOption) => {

  const location = useLocation();
  const { handleSetShowMenu } = useFinax();
  const { width } = useWindowDimensions();
  const handleSetShowMenuClick = (): void | null => (handleSetShowMenu && width <= 1168 ? handleSetShowMenu() : null);

  
  return (
    <LiOption
      showMenu={showMenu}
      className={
        (location.pathname === to && viewActive) || (location.pathname === '/' && to === '/Finax') ? 'active' : ''
      }
    >
      <Tooltip title={text}>
        <div>
          {external ? null : titleAccordion ? (
            <div className="title-accordion">
              <div className="icon">{icon}</div>
              <div className="text">{text}</div>
            </div>
          ) : (
            <Link to={to || ''} onClick={handleSetShowMenuClick}>
              <div className="icon">{icon}</div>
              <div className="text">{text}</div>
            </Link>
          )}
          {external && (
            <div className="title-accordion">
              <a href={externalLink} target="_blank" className="text" rel="noreferrer">
                <div className="icon">{icon}</div>
                <div className="text">{text}</div>
              </a>
            </div>
          )}
        </div>
      </Tooltip>
    </LiOption>
  );
};

export default MenuOption;
