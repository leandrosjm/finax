import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { MdAccountBalance, MdArrowDownward, MdArrowUpward, MdMenu, MdTrendingDown, MdTrendingUp } from 'react-icons/md';
import Logo from '../../../assets/images/logo.svg';
import isAuthorization from '../../../helper/is-authorization';
 import { useFinax } from '../../../hooks/use-config';
 import { useUser } from '../../../hooks/user';
import IconNotification from '../IconNotification';
import IconTour from '../IconTour';
import InfoPlan from '../InfoPlan';
 import UserInfoHeader from '../UserInfoHeader';
 import SelectOperators from '../SelectOperators';
import { HeaderContainer } from './style';
import { Grid } from '@material-ui/core';

const Header: React.FC = () => {
  const { handleSetShowMenu, showMenu } = useFinax();
  const [viewInfoMobile, setViewInfoMobile] = useState(false);
  const { user } = useUser();

  const handleViewInfoMobileSet = () => setViewInfoMobile(!viewInfoMobile);

  return (
    <HeaderContainer showMenu={showMenu}>
      <div className="menu-responsive">
        <button type="button" onClick={handleSetShowMenu}>
          <MdMenu />
        </button>
      </div>
      <div className="title">
        {/* <img src={Logo} /> */}
        {/*  */}
       
      </div>
      <Grid container alignItems="center" direction="row" spacing={2} lg={10}>
        <Grid item xs={3} sm={3} md={3} lg={3}>
          <div className="analytics">
            <SelectOperators label="Mês" className="semfundo" handleChangeOperator={function (event: React.ChangeEvent<any>, newValue: any): void {
            
              } }  />

          </div>  
        </Grid>

        <Grid item xs={3} sm={3} md={3} lg={3}>
          <div className="analytics">
            <span className="title-analytics">Crédidos</span>
            <span className="credit"><MdTrendingUp/> R$ 123.122</span>
          </div>
          
        </Grid>

        <Grid item xs={3} sm={3} md={3} lg={3}>
          <div className="analytics">
            <span className="title-analytics">Débitos</span>
            <span className="debit"><MdTrendingDown /> R$ 111.122</span>
          </div>
        </Grid>

        <Grid item xs={3} sm={3} md={3} lg={3}>
          <div className="analytics">
            <span className="title-analytics">Balanço</span>
            <span className="balance"><MdAccountBalance /> R$ 123.122</span>
          </div>
        </Grid>
        
      </Grid>
      <div className="container-info-user-notification">
        <div className="right-info">
         <InfoPlan />
          <IconNotification />
          <UserInfoHeader />
        </div>
        <div className="options-user-info">
          <button type="button" onClick={handleViewInfoMobileSet}>
            <IoIosArrowDown />
          </button>
          <div className={viewInfoMobile ? 'right-info-mobile-show' : 'right-info-mobile-show right-info-hidden'}>
            <UserInfoHeader viewOpenMobile={viewInfoMobile} />
            <div className="divisor" />
            <IconTour viewOpenMobile={viewInfoMobile} />
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
