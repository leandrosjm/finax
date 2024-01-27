/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';

interface IHeaderContainerProps {
  showMenu?: boolean;
}

export const HeaderContainer = styled.header<IHeaderContainerProps>`
  width: ${(props) => (props.showMenu ? 'calc(100% - 240px)' : 'calc(100% - 70px)')};
  background: #ffffff;
  box-shadow: 5px 4px 9px rgba(0, 0, 0, 0.05);
  padding: 0px 22px;
  display: flex;
  height: 58px;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 999;

  .analytics {
    display: block;
    text-align: center;
  }

  .container-info-user-notification {
    display: flex;

    .options-user-info {
      display: none;

      button {
        border: none;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;

        svg {
          font-size: 24px;
        }
      }
    }
  }

  .menu-responsive {
    display: none;

    button {
      background: transparent;
      border: none;
      outline: none;
      display: flex;
      align-items: center;

      svg {
        font-size: 26px;
        color: var(--color-neutral-soft-black);
      }
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 1024px) {
    width: 100%;
    .menu-responsive {
      display: block;
    }
    .analytics {
      display:none;
    }

    .container-info-user-notification {
      .options-user-info {
        display: block;

        .right-info-mobile-show {
          visibility: visible;
          width: 220px;
          position: absolute;
          right: 16px;
          top: 50px;
          background: var(--color-neutral-bright);
          border: 1px solid var(--color-neutral-soft-light);
          box-sizing: border-box;
          box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
          border-radius: 4px;
          transition: all 0.3s;
          opacity: 1;
          padding: 12px 10px;

          .divisor {
            width: 100%;
            border-bottom: 2px dotted var(--color-neutral-base);
            margin: 12px 0px;
          }

          @media only screen and (min-width: 0px) and (max-width: 420px) {
            width: 90vw;
            .analytics {
              display:none;
            }
          }

          &.right-info-hidden {
            visibility: hidden;
            top: 80px;
            opacity: 0;
          }
        }
      }
    }
  }

  .title {
    img {
      height: 20px;
      margin-top: 4px;
    }

    @media only screen and (min-width: 0px) and (max-width: 1024px) {
      width: 100%;

      img {
        margin-left: 10px;
      }
    }
  }

  .right-info {
    display: flex;
    align-items: center;
  } 
  .MuiInputBase-root {
    font-size: 12px;
  } 
  .MuiFormControl-marginNormal{
    margin: none !important;
  }
  .MuiFilledInput-root {
    background-color: #ffffff !important;
    
  }

  .MuiOutlinedInput-root {
    border-radius: 17px !important;
  }

  .MuiFilledInput-underline:before {
    border-bottom: 2px solid var(--color-primary-button) !important;
  }

 

  .title-analytics{
    display: block;
    font-size: 11px;
    color: var(--color-neutral-light);
  }
  .credit {
    color: var(--color-primary-button);
    font-weight: bold;
  }
  .debit {
    color: var(--color-feedback-danger-pure);
    font-weight: bold;
  }

  .balance {
    color: var(--color-feedback-attention-base);
    font-weight: bold;
  }
`;
