import styled, { css } from 'styled-components';

interface BorderProps {
  padding?: string;
  width?: string;
  height?: string;
  shadow?: boolean;
}

export const Border = styled.fieldset<BorderProps>`
  border-radius: 3px;
  border: solid 1px #d5d5d5;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin-top: 0.5em;
  padding: ${(props) => (props.padding ? props.padding : '')};
  width: ${(props) => (props.width ? props.width : '')};
  height: ${(props) => (props.height ? props.height : '')};
  ${(props) =>
    props.shadow
      ? css`
          background: #ffffff;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
          border-radius: 4px;
        `
      : null}
`;

export const BorderLabel = styled.legend`
  margin-right: 0.4em;
  background: white;
  color: #292927;
  font-size: 14px;
  font-weight: 500;
`;
