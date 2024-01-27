import styled from 'styled-components';

interface IInfoPlanContainerProps {
  viewOpenMobile?: boolean;
}

export const InfoPlanContainer = styled.div<IInfoPlanContainerProps>`
  @media only screen and (min-width: 0px) and (max-width: 1024px) {
    display: ${(props) => (props.viewOpenMobile ? 'flex' : 'none')};
  }

  cursor: default;
  display: inline-flex;
  margin-right: 16px;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */

  .plan {
    background: linear-gradient(268.83deg, var(--color-primary-pure) 0%, var(--color-primary) 100%);
    padding: 5px 8px;
    border-radius: 5px;

    p {
      font-size: 12px;
      color: var(--color-neutral-bright);
    }
  }
`;
