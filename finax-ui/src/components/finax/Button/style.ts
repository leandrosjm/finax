/* eslint-disable no-confusing-arrow */
/* eslint-disable indent */
import styled from 'styled-components';

type ButtonContainerProps = {
  padding?: string;
  height?: string;
  disabled?: boolean;
  background?: string | 'default' | 'inherit' | 'primary' | 'secondary';
};

export const ButtonContainer = styled.div<ButtonContainerProps>`
  .MuiButton-root {
    white-space: nowrap;
    height: ${(props) => (props.height ? props.height : '40px')};
    min-width: 5px;
    padding: ${(props) => props.padding || '6px 16px'} !important;
    svg {
      display: flex;
      font-size: 18px;
      margin-right: 6px;
    }
    .text {
      font-size: 12px;
      line-height: 18px;
      font-weight: 400;
    }
  }
  .MuiButton-contained {
    color: var(--color-neutral-bright);
    background: ${(props) => (props.background ? props.background : 'primary')} !important;

    .text {
      font-weight: 700;
    }
  }

  .Mui-disabled {
    background-color: var(--color-neutral-soft-black) !important;
    opacity: 0.2;
    .text {
      color: var(--color-neutral-bright);
    }
  }
`;
