import styled from 'styled-components';

export const BreadCrumbUi = styled.div`
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    margin: 0px;
    padding: 0px;
    align-items: center;

    li {
      list-style: none;
      font-size: 12px;
      color: var(--color-neutral-medium);
      margin-right: 8px;
      display: inline-flex;
      align-items: center;

      span {
        margin-left: 5px;
      }

      a {
        font-size: 12px;
        color: var(--color-neutral-medium);
        text-decoration: none;
      }

      &:last-child {
        span {
          color: var(--color-primary);
        }
      }
    }
  }

  .clock {
    font-size: 12px;
    color: var(--color-neutral-medium);
  }
`;
