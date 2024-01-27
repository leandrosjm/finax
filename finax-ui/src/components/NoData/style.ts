import styled from 'styled-components';
import { AiOutlineInfoCircle } from 'react-icons/ai';

type NoDataContainerProps = {
  height?: string;
};

export const NoDataContainer = styled.div<NoDataContainerProps>`
  display: flex;
  width: 100%;
  height: ${(props) => (props.height ? props.height : '20vh')};
  align-items: center;
  justify-content: center;

  h2 {
    margin: 0px;
    padding: 0px;
    font-size: 20px;
    color: var(--color-neutral-medium);
    font-weight: 400;
  }
`;

export const InfoIcon = styled(AiOutlineInfoCircle)`
  margin-right: 10px;
  font-size: 40px;
  color: var(--color-neutral-medium);
`;
