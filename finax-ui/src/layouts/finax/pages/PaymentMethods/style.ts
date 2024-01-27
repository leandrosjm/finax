import styled from 'styled-components';
import { BlockOutlined, CheckOutlined } from '@material-ui/icons';

export const PaymentMethodsContainer = styled.div`
  .MuiFormControlLabel-root {
    margin-left: 8px !important;
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
