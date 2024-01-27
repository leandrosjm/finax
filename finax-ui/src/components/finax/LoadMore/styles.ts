import styled from 'styled-components';

export const LoadMoreContainer = styled.div`
  display: block;
  margin-top: 32px;

  button {
    font-size: 12px;
    color: var(--color-neutral-light);
    transition: color 0.2s;

    &:hover {
      color: var(--color-primary-pure);
    }
  }
`;
