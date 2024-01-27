import styled from 'styled-components';
import { BlockOutlined, CheckOutlined } from '@material-ui/icons';

export const CompanyContainer = styled.div`
  .MuiFormControlLabel-root {
    margin-left: 8px !important;
  }
  .divisor {
    height: 1px;
    background-color: red;
    width: calc(100% - 44px);
    margin: 0px 22px 0px 0px;
    opacity: 0.5;
  }
`;

export const DescriptionTitle = styled.strong`
  font-weight: bold;
  font-size: 0.8em;
  color: var(--color-neutral-soft-black);
`;

export const BlockIcon = styled(BlockOutlined)`
  color: #e8503e !important;
`;

export const CheckIcon = styled(CheckOutlined)`
  color: #36b37e !important;
`;
