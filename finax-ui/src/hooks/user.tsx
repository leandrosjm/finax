import React, { createContext, useContext, useEffect, useState } from 'react';
import authService from '../layouts/finax/services/domain/auth';

interface UserProps {
  email: string;
  id: string;
  name: string;
  fullName: string;
  company_name: string;
  support_id: string;
  is_admin: boolean;

}

interface UserAuthenticatedProps {
  user: UserProps | null;
  token: string;
  setUserAuthenticated: (user: any) => void;
  setTokenAuthenticated: (token: string) => void;
  setFilterUser: (filter: any | null) => void;
  filter: any | null;
}

interface UserProviderProps {
  children: JSX.Element[] | JSX.Element;
}

const UserContext = createContext<UserAuthenticatedProps>({} as UserAuthenticatedProps);

export const UserProvider: React.FC<UserProviderProps> = ({ children }: UserProviderProps) => {
  const [userState, setUserState] = useState<UserProps | null>(null);
  const [filterUserState, setFilterUserState] = useState<any | null>(null);
  const [tokenState, setTokenState] = useState<string>(() => sessionStorage.getItem('@token-finax') as string);

  const setUserAuthenticated = (user: UserProps) => setUserState(user);

  const setTokenAuthenticated = (token: string) => setTokenState(token);

  const setFilterUser = (newFilter: any | null) => setFilterUserState(newFilter);

  const loadUserInfo = async () => {
    const token = sessionStorage.getItem('@token-finax');
    if (token) {
      const getUserInfo = await authService.getAuthenticate(token as string);
      setUserAuthenticated( getUserInfo.data.user as UserProps);
    }
  };

  useEffect(() => {
    loadUserInfo();
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        user: userState,
        token: tokenState,
        setUserAuthenticated,
        setTokenAuthenticated,
        filter: filterUserState,
        setFilterUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUser(): UserAuthenticatedProps {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within an UserProvider');
  }

  return context;
}
