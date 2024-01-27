import styled, { css } from 'styled-components';

interface IPropsMenuLeftContainer {
  showMenu?: boolean;
}

interface IPropsMenuOptions {
  showMenu?: boolean;
}

export const MenuLeftContainer = styled.section<IPropsMenuLeftContainer>`
  width: ${(props) => (props.showMenu ? '240px' : '70px')};
  height: 100%;
  background-color: var(--color-primary);
  position: fixed;
  transition: all 0.2s;
  z-index: 9999;

  .MuiAccordionDetails-root {
    padding: 0px;
  }

  .MuiAccordion-root {
    background: transparent;
    padding: 0px;
    margin: 0px;

    &::before {
      background: transparent;
    }
  }

  .MuiIconButton-root {
    padding: 0px;
    margin-top: 16px;
    display: ${(props) => (props.showMenu ? 'inline-flex' : 'none')};
  }

  .MuiSvgIcon-root {
    color: var(--color-neutral-bright);
    opacity: 0.7;
  }

  .MuiAccordion-root.Mui-expanded {
    margin: 0px;
  }

  .MuiAccordionSummary-content.Mui-expanded {
    margin: 0px;
  }

  .MuiAccordionSummary-content {
    margin: 0px;
    width: 100%;
    display: block;
  }

  .MuiPaper-elevation1 {
    box-shadow: none;
  }

  .MuiAccordionSummary-root {
    padding: 0px 22px 0px 0px;
  }

  .logo-menu {
    padding: 6px 22px 0px 22px;
    text-align: center;
    margin-top: 10px;
    .logo-closed {
      display: none;
    }
  }

  ul {
    div.acars-menu {
      div:first-child {
        div.MuiAccordionSummary-content {
          li {
            margin: 10px 0px 0px !important;
          }
        }
      }
    }
  }

  .footer-menu {
    position: absolute;
    bottom: 0px;
    padding: 22px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    transition: all 0.2s;
    p {
      font-size: ${(props) => (props.showMenu ? '10px' : '0px')};
      font-weight: 300;
      color: var(--color-neutral-bright);
      transition: all 0.2s;
      strong {
        font-weight: 700;
        transition: all 0.2s;
      }
    }
  }

  ${(props) =>
    !props.showMenu
      ? css`
          .logo-menu {
            text-align: center;
            .logo-open {
              display: none;
            }
            .logo-closed {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        `
      : null};

  @media only screen and (min-width: 0px) and (max-width: 1024px) {
    ${(props) =>
      props.showMenu
        ? css`
            display: block;
            width: 240px;
            position: fixed;
            height: 100%;
            left: 0px;
            transition: all 0.3s;
          `
        : css`
            display: block;
            width: 240px;
            position: fixed;
            height: 100%;
            left: -255px;
            transition: all 0.3s;
          `}
  }

  &:hover {
    width: 240px;
    .MuiIconButton-root {
      display: inline-flex;
    }
    .footer-menu {
      p {
        font-size: 10px;
      }
    }
    .logo-menu {
      .logo-open {
        display: block;
      }
      .logo-closed {
        display: none;
      }
      
    }
    .text {
      color: var(--color-neutral-bright);
      opacity: 0.7;
      font-size: 13px;
    }
    a {
      .text {
        opacity: 1;
        font-size: 13px;
      }
    }

    li {
      border-left: 5px solid var(--color-primary);
      &.active {
        border-left: 5px solid var(--color-neutral-bright);
        a {
          color: var(--color-neutral-bright);
          opacity: 1;
        }
      }
    }
  }
`;

export const MenuOptions = styled.nav<IPropsMenuOptions>`
  width: 100%;
  display: block;
  height: calc(100% - 120px);
  overflow-y: auto;
  scrollbar-color: var(--color-neutral-soft-black) var(--color-primary);
  scrollbar-width: thin;

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: var(--color-primary);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-neutral-soft-black);
    border-radius: 50px;
  }

  .divisor {
    height: 1px;
    background-color: var(--color-neutral-bright);
    width: calc(100% - 44px);
    margin: 22px 22px 0px 22px;
    opacity: 0.5;
  }

  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
    display: block;
    width: 100%;
    h4 {
      font-size: 14px;
      font-weight: 700;
      color: var(--color-neutral-bright);
      margin-top: 27px;
      padding: 22px 0px 0px 22px;
      margin: 0px;
      display: block;
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
