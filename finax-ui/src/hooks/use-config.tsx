import React, { createContext, useContext, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

import { useUser } from './user';
import useWindowDimensions from './useWindowDimensions';

interface IFinax {
  showMenu: boolean;
  showBoxDownloadUploader: boolean;
  overlayLoading: boolean;
  handleSetShowMenu?: () => void;
  handleSetShowBoxDownloadUploader?: () => void;
  handleSetOverlayLoading: (value: boolean) => void;
  io: Socket;
}

const webSocket = io(`${process.env.REACT_APP_Finax_SOCKET}`, {
  transports: ['websocket'],
  autoConnect: true,
  rememberUpgrade: true,
});

interface IAuthProps {
  children: JSX.Element[] | JSX.Element;
}

const FinaxContext = createContext<IFinax>({} as IFinax);

export const FinaxProvider: React.FC<IAuthProps> = ({ children }: IAuthProps) => {
  const ioSocket = webSocket;

  const { width } = useWindowDimensions();
  const { user } = useUser();
  const [socketId, setSocketId] = useState('');
  const [showMenu, setShowMenuState] = useState(true);
  const [showBoxDownloadUploader, setShowBoxDownloadUploader] = useState(true);
  const [overlayLoading, setOverlayLoading] = useState(false);

  const handleSetShowMenu = () => setShowMenuState(!showMenu);
  const handleSetShowBoxDownloadUploader = () => setShowBoxDownloadUploader(!showBoxDownloadUploader);
  const handleSetOverlayLoading = (value: boolean) => setOverlayLoading(value);

  useEffect(() => {
    if (width < 1168) setShowMenuState(true);
  }, [width]);

   useEffect(() => {
     webSocket.on('connect', function () {
       setSocketId(ioSocket.id);
     });
   }, []);

  useEffect(() => {
    if (user) ioSocket.emit('new-user', JSON.stringify({ user }));
  }, [socketId, user]);

  return (
    <FinaxContext.Provider
      value={{
        showMenu,
        handleSetShowMenu,
        showBoxDownloadUploader,
        handleSetShowBoxDownloadUploader,
        overlayLoading,
        handleSetOverlayLoading,
      //  io: ioSocket,
      }}
    >
      {children}
    </FinaxContext.Provider>
  );
};

export function useFinax(): IFinax {
  const context = useContext(FinaxContext);

  if (!context) {
    throw new Error('useFinax must be used within an FinaxProvider');
  }

  return context;
}
