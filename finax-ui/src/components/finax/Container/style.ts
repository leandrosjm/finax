import styled from 'styled-components';

interface IContainerProps {
  showMenu?: boolean;
}

export const ContainerUi = styled.section<IContainerProps>`
  display: block;
  width: 100%;
  padding-left: ${(props) => (props.showMenu ? '240px' : '70px')};
  transition: all 0.3s;

  .body-pages {
    padding-top: 80px;
  }

  @media only screen and (min-width: 0px) and (max-width: 1024px) {
    padding-left: 0px;
  }
`;
