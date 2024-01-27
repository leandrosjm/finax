import React from 'react';
import { FiNavigation } from 'react-icons/fi';
import { IconTourContainer } from './styled';

interface IIconTourProps {
  viewOpenMobile?: boolean;
}

const IconTour: React.FC<IIconTourProps> = ({ viewOpenMobile }: IIconTourProps) => (
  <IconTourContainer title="Tour" viewOpenMobile={viewOpenMobile}>
    <FiNavigation />
    {viewOpenMobile ? <p>Tour guide</p> : ''}
  </IconTourContainer>
);

export default IconTour;
