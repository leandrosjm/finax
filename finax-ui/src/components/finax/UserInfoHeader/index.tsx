import React, { useEffect, useState } from 'react';
//import { useUser } from '../../../hooks/user';
import { UserInfoHeaderContainer } from './style';
import { useUser } from '../../../hooks/user';

interface IUserInfoHeaderProps {
  viewOpenMobile?: boolean;
}

const UserInfoHeader: React.FC<IUserInfoHeaderProps> = ({ viewOpenMobile }: IUserInfoHeaderProps) => {
  const { user } = useUser();
  const [iconState, setIconState] = useState('');
 
  useEffect(() => {
    const iconSet = user && user.name ? user.name.substr(0, 1) : user && user.email ? user.email.substr(0, 1) : '';
    setIconState(iconSet);
  }, [user]);

  return (
    <UserInfoHeaderContainer viewOpenMobile={viewOpenMobile}>
      <div className="icon-name">{iconState.toUpperCase()}</div>
      <div className="info-user">
        {user ? <h4>{user.name || 'User'}</h4> : null}
        <h5>{user ? user.email : '...'}</h5>
        <h6>Suporte ID: {user ? user.support_id : '...'}</h6>
      </div>
    </UserInfoHeaderContainer>
  );
};

export default UserInfoHeader;
