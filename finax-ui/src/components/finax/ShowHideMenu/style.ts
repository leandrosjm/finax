import styled from 'styled-components';

export const ButtonShowHideMenu = styled.button`
  position: absolute;
  top: 16px;
  right: -12px;
  width: 30px;
  height: 30px;
  background: var(--color-primary-dark);
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;

  svg {
    color: var(--color-neutral-bright);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    position: absolute;
    z-index: 99999;
  }

  &:hover {
    background-color: var(--color-neutral-bright);
    transform: scale(1.2);
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);

    svg {
      color: var(--color-primary-dark);
    }
  }
`;
