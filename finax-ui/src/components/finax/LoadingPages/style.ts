import styled from 'styled-components';

interface LoadingPagesContainerProps {
  height?: string;
}

export const LoadingPagesContainer = styled.div<LoadingPagesContainerProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: ${(props) => (props.height ? props.height : '40vh')};

  div {
    text-align: center;
  }
`;
