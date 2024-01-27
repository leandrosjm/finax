import styled from 'styled-components';

export const HeaderInfoContainer = styled.div`
  width: 100%;
  display: block;
  border-bottom: 1px dashed var(--color-neutral-base);
  padding-bottom: 10px;

  .title-health {
    display: flex;
    align-items: center;

    h2 {
      font-size: 20px;
      font-weight: 500;
      color: var(--color-neutral-soft-black);
    }

    h6 {
      font-size: 13px;
      font-weight: 400;
      color: var(--color-neutral-medium);
      margin-left: 8px;
    }

    @media screen and (min-width: 0px) and (max-width: 420px) {
      display: block;
      h6 {
        margin-left: 0px;
      }
    }
  }

  .icon-info-xs {
    display: flex;
    justify-content: flex-end;

    button {
      background: transparent;
      outline: none;
      border: none;
      cursor: pointer;
      height: 24px;

      svg {
        color: var(--color-neutral-soft-black);
        font-size: 20px;
      }
    }
  }
`;
