import styled from 'styled-components';
import ListItemIcon from '@material-ui/core/ListItemIcon';

interface IconMenuContainerProps {
  padding?: string;
}

export const IconMenuContainer = styled.div<IconMenuContainerProps>`
  button {
    padding: ${(props) => (props.padding ? props.padding : '6px')} !important;
    .MuiIconButton-label {
      svg {
        font-size: 20px;
      }
    }
  }
`;

export const ListItemIconUi = styled(ListItemIcon)`
  min-width: auto !important;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 15px;
    display: flex;
    color: #292927;
    margin-right: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
