import React, { useEffect, useState } from 'react';
//import isAuthorization from '../../../helper/is-authorization';
//import { useUser } from '../../../hooks/user';
import { InfoPlanContainer } from './styled';

interface IInfoPlanProps {
  viewOpenMobile?: boolean;
}

const InfoPlan: React.FC<IInfoPlanProps> = ({ viewOpenMobile }: IInfoPlanProps) => {
  //const { user } = useUser();
  const user = {
    name: 'leandro',
    mail: 'leandro@finax.me',
    fullName: 'leandro pereira',
    company_name: 'Finax.me'
  }
  const [planState, setPlanState] = useState<string | null>(null);


  useEffect(() => {
    //verifyPlan();
    setPlanState('PREMIUM');
  }, [user]);

  if (!planState) return null;

  return (
    <InfoPlanContainer viewOpenMobile={viewOpenMobile as boolean}>
      <div className="plan">
        <p>
          <strong>{planState}</strong>
        </p>
      </div>
    </InfoPlanContainer>
  );
};

export default InfoPlan;
