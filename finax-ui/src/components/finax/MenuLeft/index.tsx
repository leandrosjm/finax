import React from 'react';

import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { AiFillLock, AiOutlineDesktop, AiOutlineSetting } from 'react-icons/ai';
import { BsCircleFill, BsGraphUp } from 'react-icons/bs';
import { FaLaptopMedical } from 'react-icons/fa';
import {
  MdAddShoppingCart,
  MdFinaxmodeActive,
  MdAssignment,
  MdBarChart,
  MdHome,
  MdImportContacts,
  MdLoyalty,
  MdNotificationsNone,
  MdOutlineAssignment,
  MdOutlineHome,
  MdOutlineShoppingBasket,
  MdOutlineWork,
  MdOutlineWorkOutline,
  MdQueuePlayNext,
  MdShoppingBasket,
  MdStore,
  MdStorefront,
  MdSupervisorAccount,
  MdTune,
  MdVerticalAlignTop,
} from 'react-icons/md';
import { RiBarChartFill, RiChat4Line, RiFlagLine } from 'react-icons/ri';
import { useRouteMatch } from 'react-router-dom';
import LogoFlyFinaxWhite from '../../../assets/images/logo.png';
import LogoIconFinax from '../../../assets/images/logo-icon.png';
import MenuOption from '../MenuOption';
import ShowHideMenu from '../ShowHideMenu';
import Submenus from '../Submenus';

import isAuthorization from '../../../helper/is-authorization';
 import { useFinax } from '../../../hooks/use-config';
 import { useUser } from '../../../hooks/user';
import { MenuLeftContainer, MenuOptions } from './style';

const MenuLeft: React.FC = () => {
   const { user } = useUser();
  const { showMenu, handleSetShowMenu } = useFinax();
  
  const routerMatch = useRouteMatch();
  const handleSetShowMenuClick = (): void | null => (handleSetShowMenu ? handleSetShowMenu() : null);
  
  

  return (
    <MenuLeftContainer showMenu={showMenu} id="menu">
      <ShowHideMenu showMenu={showMenu} handleSetShowMenu={handleSetShowMenuClick} />
      <div className="logo-menu">
        <div className="logo-open">
          <img src={LogoFlyFinaxWhite} alt="Finax.me" />
        </div>
        <div className="logo-closed">
          <img src={LogoIconFinax} alt="Finax.me" />
        </div>
      </div>
      <MenuOptions showMenu={showMenu}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="home-tools-content"
            id="home-tools-header"
          >
            <MenuOption
              icon={<MdSupervisorAccount size={20} />}
              text="Clientes"
              showMenu={showMenu}
              titleAccordion
            />
          </AccordionSummary>
          <AccordionDetails>
            <Submenus showMenu={showMenu}>
              <MenuOption
                to="/home-1"
                icon={<BsCircleFill size={5} />}
                text="Dashboard"
                showMenu={showMenu}
                viewActive
              />
            </Submenus>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="home-tools-content"
            id="home-tools-header"
          >
            <MenuOption
              icon={<MdStorefront size={20} />}
              text="Empresa"
              showMenu={showMenu}
              titleAccordion
            />
          </AccordionSummary>
          <AccordionDetails>
            <Submenus showMenu={showMenu}>
              <MenuOption
                to="/company"
                icon={<BsCircleFill size={5} />}
                text="Registro"
                showMenu={showMenu}
                viewActive
              />
              <MenuOption
                to="/company/employees"
                icon={<BsCircleFill size={5} />}
                text="Funcionários"
                showMenu={showMenu}
                viewActive
              />
              <MenuOption
                to="/company/jobs"
                icon={<BsCircleFill size={5} />}
                text="Cargos e salários"
                showMenu={showMenu}
                viewActive
              />
               <MenuOption
                to="/company/expenses"
                icon={<BsCircleFill size={5} />}
                text="Despesas fixas"
                showMenu={showMenu}
                viewActive
              />
              <MenuOption
                to="/company/payment-methods"
                icon={<BsCircleFill size={5} />}
                text="Formas de pagamento"
                showMenu={showMenu}
                viewActive
              />
            </Submenus>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="home-tools-content"
            id="home-tools-header"
          >
            <MenuOption
              icon={<MdLoyalty size={20} />}
              text="Fidelidade"
              showMenu={showMenu}
              titleAccordion
            />
          </AccordionSummary>
          <AccordionDetails>
            <Submenus showMenu={showMenu}>
              <MenuOption
                to="/home-1"
                icon={<BsCircleFill size={5} />}
                text="Dashboard"
                showMenu={showMenu}
                viewActive
              />
            </Submenus>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="home-tools-content"
            id="home-tools-header"
          >
            <MenuOption
              icon={<MdAddShoppingCart size={20} />}
              text="Fornecedores"
              showMenu={showMenu}
              titleAccordion
            />
          </AccordionSummary>
          <AccordionDetails>
            <Submenus showMenu={showMenu}>
              <MenuOption
                to="/home-1"
                icon={<BsCircleFill size={5} />}
                text="Dashboard"
                showMenu={showMenu}
                viewActive
              />
            </Submenus>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="report-content" id="report-header">
            <MenuOption icon={<MdBarChart size={20} />} text="Relatórios" showMenu={showMenu} titleAccordion />
          </AccordionSummary>
          <AccordionDetails>
            <Submenus showMenu={showMenu}>
              <MenuOption
                to="/report"
                icon={<BsCircleFill size={5} />}
                text="Reports"
                showMenu={showMenu}
                viewActive
              />
            </Submenus>
          </AccordionDetails>
        </Accordion>

        <div className="divisor" />
        <ul>
          <h4>{showMenu ? 'Others' : '......'}</h4>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="home-tools-content"
              id="home-tools-header">
                <MenuOption
                  to="/configuration/users"
                  icon={<AiOutlineSetting size={20} />}
                  text="Configurações"
                  showMenu={showMenu}
                  viewActive
                />
            </AccordionSummary>
            <AccordionDetails>
              <Submenus showMenu={showMenu}>
                <MenuOption
                  to="/configuration/users"
                  icon={<BsCircleFill size={5} />}
                  text="Usuários"
                  showMenu={showMenu}
                  viewActive
                />
              </Submenus>
            </AccordionDetails>
            </Accordion>
            <MenuOption
              to="/instruction-manual"
              icon={<MdImportContacts size={20} />}
              text="Instruction Manual"
              showMenu={showMenu}
              viewActive
            />
          <MenuOption
            to="/customer-support"
            icon={<RiChat4Line size={20} />}
            text="Customer Support"
            showMenu={showMenu}
            viewActive
          />
        </ul>
      </MenuOptions>
      <div className="footer-menu">
      </div>
    </MenuLeftContainer>
  );
};

export default MenuLeft;
