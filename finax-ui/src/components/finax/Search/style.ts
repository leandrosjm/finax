import styled from 'styled-components';

interface SearchProps {
  margin?: string;
}

export const SearchContainer = styled.div<SearchProps>`
  display: flex;
  align-items: center;
  margin: ${(props) => (props.margin ? props.margin : '0px 0px 15px 0px ')};
`;
