import styled from 'styled-components';

export const LoadingContainer = styled.div`
  position: fixed;
  z-index: 9999999;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  p {
    font-size: 1em;
    text-align: center;
  }
  img {
    width: 25px;
    height: 25px;
    margin-bottom: 16px;
  }
`;
