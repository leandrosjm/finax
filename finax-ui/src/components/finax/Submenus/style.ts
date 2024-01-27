import styled from 'styled-components';

interface IPropsSubmenusUi {
  showMenu?: boolean;
}

export const SubmenusUi = styled.div<IPropsSubmenusUi>`
  display: block;
  width: 100%;

  ul {
    padding: 0px;

    h5 {
      font-size: 11px;
      font-weight: bold;
      color: var(--color-neutral-bright);
      margin: 22px 22px 0px 55px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    li {
      display: flex;
      align-items: center;
      margin: 6px 0px 0px 0px;

      a {
        margin-left: 10px;
      }

      &:last-child {
        margin-bottom: 16px;
      }
    }
  }
`;
