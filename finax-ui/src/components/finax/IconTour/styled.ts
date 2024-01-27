import styled from 'styled-components';

interface IIconTourContainerProps {
  viewOpenMobile?: boolean;
}

export const IconTourContainer = styled.div<IIconTourContainerProps>`
  display: inline-flex;
  margin-right: 16px;
  cursor: pointer;

  svg {
    color: var(--color-neutral-soft-black);
    width: 20px;
    height: 20px;
  }

  p {
    color: var(--color-neutral-dark);
    font-size: 12px;
    margin-left: 8px;
  }

  @media only screen and (min-width: 0px) and (max-width: 1024px) {
    display: ${(props) => (props.viewOpenMobile ? 'flex' : 'none')};
    margin-top: 12px;
  }
`;
