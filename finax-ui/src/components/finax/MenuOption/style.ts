import styled, { css } from 'styled-components';

interface IPropsOption {
  showMenu?: boolean;
}

export const LiOption = styled.li<IPropsOption>`
  margin: 0px;
  display: flex;
  align-items: center;
  padding: 3px;
  ${(props) =>
    props.showMenu
      ? css`
          border-left: 5px solid var(--color-primary);
        `
      : css`
          border-left: 5px solid transparent;
        `}
  transition: all 0.2s;
  margin-top: 10px;

  .title-accordion {
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: all 0.2s;

    .icon {
      display: inline-flex;
      margin-left: 16px;
      margin-right: 16px;
      transition: all 0.2s;

      svg {
        color: var(--color-neutral-bright);
        opacity: 0.7;
        transition: all 0.2s;
      }
    }

    .text {
      display: inline-flex;
      font-size: 13px;
      color: var(--color-neutral-bright);
      opacity: 0.7;
      transition: all 0.2s;

      ${(props) =>
        !props.showMenu
          ? css`
              opacity: 0;
              font-size: 0px;
            `
          : css`
              color: var(--color-neutral-bright);
              opacity: 0.7;
              font-size: 13px;
            `}
    }

    &:hover {
      .text {
        opacity: 1;
      }

      .icon {
        opacity: 1;

        svg {
          opacity: 1;
        }
      }
    }
  }

  &.active {
    ${(props) =>
      props.showMenu
        ? css`
            border-left: 5px solid var(--color-neutral-bright);
          `
        : ''}
    a {
      color: var(--color-neutral-bright);
      opacity: 1;
    }
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--color-neutral-bright);
    opacity: 0.7;
    transition: all 0.2s;

    .icon {
      display: inline-flex;
      margin-left: 16px;
      margin-right: 16px;
      transition: all 0.2s;
    }

    .text {
      display: inline-flex;
      transition: all 0.2s;

      ${(props) =>
        !props.showMenu
          ? css`
              opacity: 0;
              font-size: 0px;
            `
          : css`
              opacity: 1;
              font-size: 13px;
            `}
    }

    &:hover {
      opacity: 1;
    }
  }
`;
