import styled from 'styled-components';

export const ErrorsContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 150px 0px;

  h2 {
    font-size: 124px;
    font-weight: 300;
    margin: 0;
    color: var(--color-neutral-light);
  }

  p {
    font-size: 24px;
    color: var(--color-primary);
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    margin-bottom: 32px;
    img {
      width: 50px;
      display: flex;
    }
  }

  button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 14px;
    color: var(--color-neutral-soft-black);
    transition: all 0.3s;
    &:hover {
      color: var(--color-feedback-success-dark);
    }
  }
`;
