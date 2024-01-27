import { Table, TableCell, TableRow } from '@material-ui/core';
import styled, { css } from 'styled-components';

interface ContainerProps {
  background?: boolean;
  height?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-height: ${(props) => (props.height ? props.height : 'auto')};
  overflow-y: auto !important;
  overflow-x: hidden;
  box-shadow: ${(props) => props.background && '0px 0px 4px rgba(0, 0, 0, 0.25)'};

  &::-webkit-scrollbar {
    width: 4px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: rgba(41, 41, 39, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(41, 41, 39); /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
  }
`;

interface SimpleTableContainerProps {
  paddingfirstchild?: string;
}

export const SimpleTableContainer = styled(Table)<SimpleTableContainerProps>`
  width: 100%;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 4px;

  thead {
    tr {
      th {
        font-size: 12px;
        font-weight: 700;
        color: var(--color-neutral-soft-black);
        padding: 0px 12px;
        height: 32px;

        .MuiCheckbox-root {
          padding: 0px !important;
        }

        &:first-child {
          width: 1px;
          padding: ${(props) => (props.paddingfirstchild ? props.paddingfirstchild : '0px 0px 0px 22px')} !important;
        }
      }
    }
  }
  tbody {
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 207px;
  }
`;

interface SimpleTableRowProps {
  hasonclick?: string;
  paddingprop?: string;
  rowselected?: boolean;
}

export const SimpleTableRow = styled(TableRow)<SimpleTableRowProps>`
  transition: all 0.4s;
  text-align: left;
  font-size: 14px;
  color: var(--color-neutral-dark);
  width: 100%;
  height: 32px;

  background-color: ${(props) => (props.rowselected ? 'var(--color-neutral-soft-light) !important' : '')};

  cursor: ${(props) => (props.hasonclick ? props.hasonclick : 'auto')};

  .MuiCheckbox-root {
    padding: 0px !important;
  }

  &:nth-child(even) {
    background-color: var(--background-body);
  }

  &:nth-child(odd) {
    background-color: white;
  }

  &:hover {
    background-color: var(--color-neutral-soft-light);
  }

  td {
    font-size: 12px;
    font-weight: 400;
    color: var(--color-neutral-medium);
    /* white-space: nowrap; */
    padding: 0px 12px;

    &:first-child {
      padding: ${(props) => (props.paddingprop ? props.paddingprop : '0px 0px 0px 22px')} !important;
    }

    td {
      padding: 6px 12px;
      > span {
        padding: 4px !important;
      }
    }
  }
`;
interface SimpleTableDataProps {
  color?: string;
}
export const SimpleTableData = styled(TableCell)<SimpleTableDataProps>`
  font-size: 12px !important;
  color: ${(props) => (props.color ? props.color : 'var(--color-neutral-medium)')} !important;
  font-weight: 400;
  padding: 6px 12px;
  vertical-align: middle;
  > span > svg,
  > svg {
    font-size: 14px;
  }
  .MuiBadge-badge {
    height: 14px;
    padding: 0 4px;
    font-size: 9px;
    min-width: 14px;
  }
`;

type ColTableContainerProps = {
  width?: string;
  padding?: boolean;
};

export const ColTableContainer = styled.div<ColTableContainerProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
  display: inline-flex;
  font-size: 12px;
  font-weight: 400;
  color: var(--color-neutral-medium);
  text-align: left;
  ${({ padding }) =>
    padding
      ? css`
          padding: 6px 0px;
        `
      : null}
  &:first-child {
    margin-right: 6px;
  }
  &.checkbox {
    width: auto;
  }
  strong {
    font-weight: 700;
    color: var(--color-neutral-soft-black);
  }

  ul {
    padding: 0px;
    margin: 0px;
    list-style: none;
    display: flex;
    align-items: center;
    li {
      margin: 0px 2px;
      button {
        border: none;
        background: transparent;
        outline: none;
        cursor: pointer;
        svg {
          display: flex;
          font-size: 16px;
        }
      }
    }
  }
`;
