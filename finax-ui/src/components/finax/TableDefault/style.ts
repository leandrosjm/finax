import { Table, TableContainer, TableHead, TableRow } from '@material-ui/core';
import styled from 'styled-components';

export const TableFinaxContainer = styled(TableContainer)`
  background: var(--color-neutral-bright);
  border: 1px solid var(--color-neutral-base);
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const TableDefault = styled(Table)``;

export const TableHeadFinax = styled(TableHead)`
  padding: 0px !important;
  tr {
    border-radius: 5px 5px 0px 0px;
    th {
      color: var(--color-neutral-soft-black);
      font-size: 12px;
      font-weight: 700 !important;
      padding: 20px 14px !important;
      span {
        th {
          font-size: 12px !important;
          color: var(--color-neutral-soft-black) !important;
          font-weight: 700 !important;
          padding: 8px !important;
          border: none !important;
        }
      }
    }
  }
`;

export const TableRowFinax = styled(TableRow)`
  padding: 0px !important;
  transition: all 0.3s;
  height: 32px;

  td {
    color: var(--color-neutral-medium);
    font-size: 0.75rem;
    font-weight: 400 !important;
    padding: 4px 14px !important;
    margin: 0px;
    .actions {
      ul {
        margin: 0px;
        padding: 0px;
        list-style: none;
        display: flex;
        align-items: center;
        li {
          button {
            background: transparent;
            border: 0px;
            cursor: pointer;
            outline: none;
            svg {
              width: 14px;
              height: 14px;
              color: #000;
            }
          }
        }
      }
    }
    > .MuiSvgIcon-root,
    > span > svg {
      font-size: 14px;
      color: #000;
    }

    img {
      display: inline !important;
    }
  }

  &:nth-child(odd) {
    background-color: var(--background-body);
  }

  &:nth-child(even) {
    background-color: var(--color-neutral-bright);
  }

  &:hover {
    background-color: var(--color-neutral-base) !important;
  }
`;
