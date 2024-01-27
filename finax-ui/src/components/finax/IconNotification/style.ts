import styled from 'styled-components';

export const IconNotificationContainer = styled.div`
  display: inline-flex;
  margin-right: 16px;
  position: relative;

  button {
    border: none;
    background: transparent;
    outline: none;
    height: 24px;
    position: relative;
    cursor: pointer;

    .new-msg {
      width: 8px;
      height: 8px;
      background-color: var(--color-feedback-danger-pure);
      border-radius: 50px;
      position: absolute;
      top: 2px;
      right: 8px;
      border: 1px solid var(--color-neutral-bright);
    }

    svg {
      font-size: 24px;
      path {
        stroke: var(--color-neutral-soft-black);
      }
    }
  }

  .show-messages {
    visibility: visible;
    width: 360px;
    position: absolute;
    top: 50px;
    right: -150px;
    background: var(--color-neutral-bright);
    border: 1px solid var(--color-neutral-soft-light);
    box-sizing: border-box;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 21px;
    transition: all 0.3s;

    .close-notification {
      position: absolute;
      right: 8px;
      top: 8px;

      button {
        border: none;
        svg {
          color: var(--color-neutral-soft-black);
        }
      }
    }

    &.show-messages-close {
      position: absolute;
      top: 90px;
      opacity: 0;
      transition: all 0.3s;
      visibility: hidden;
    }

    .arrow-top {
      width: 12px;
      border: 6px solid transparent;
      border-bottom: 6px solid var(--color-neutral-bright);
      position: absolute;
      top: -12px;
      left: 176px;
    }

    .tabs {
      display: flex;
      border-bottom: 1px solid var(--color-neutral-light);
      align-items: center;
      user-select: none; /* supported by Chrome and Opera */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */

      .tab {
        padding: 0px 16px 8px 16px;
        display: inline-flex;
        justify-content: center;
        margin-bottom: -1px;
        position: relative;
        white-space: nowrap;
        button {
          cursor: pointer;
          font-size: 14px;
          color: var(--color-neutral-light);
        }

        .info-new {
          width: 8px;
          height: 8px;
          background-color: var(--color-feedback-danger-pure);
          border-radius: 50px;
          position: absolute;
          right: 0px;
          top: 0px;
        }

        &.active {
          border-bottom: 2px solid var(--color-primary);
          button {
            color: var(--color-neutral-soft-black);
            font-weight: 500;
          }
        }
      }
    }

    .tab-body {
      width: 100%;
      display: block;
      max-height: 70vh;
      margin-top: 20px;

      .tab-notifications {
        display: block;
        .tab-row {
          display: block;
          padding-bottom: 16px;
          margin-top: 16px;
          border-bottom: 1px solid var(--color-neutral-base);
          width: 100%;
          h6 {
            color: var(--color-neutral-medium);
            font-size: 10px;
            margin-bottom: 8px;
          }

          .info-msg {
            display: flex;
            align-items: center;

            .circle-number {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 25px;
              height: 25px;
              background-color: var(--color-feedback-danger-pure);
              font-size: 11px;
              color: var(--color-neutral-bright);
              font-weight: 500;
              border-radius: 50px;
            }

            p {
              margin-left: 8px;
              font-size: 13px;
              color: var(--color-neutral-dark);
            }
            > .link-activity {
              display: flex;
              margin-left: 8px;
              a {
                font-size: 13px;
                text-decoration: none;
                color: var(--color-primary);
                &:hover {
                  text-decoration: underline;
                }
              }
            }

            .files-error-msg {
              display: flex;
              justify-content: space-between;
              div {
                display: flex;
                flex-direction: column;
                margin-right: 16px;

                strong {
                  font-size: 12px;
                  color: var(--color-neutral-soft-black);
                  font-weight: 600;
                }
                p {
                  margin: 0px !important;
                  font-size: 12px;
                  color: var(--color-neutral-medium);
                  font-weight: 400;
                }
              }

              a {
                font-size: 12px;
              }
            }
          }
        }
      }

      .link-page {
        text-align: center;
        margin-top: 16px;

        a {
          font-size: 13px;
          text-decoration: none;
          color: var(--color-primary);

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 420px) {
    .show-messages {
      width: 80vw;
      right: -23px;

      .arrow-top {
        right: 35px;
        left: auto;
      }
    }
  }

  @media only screen and (min-width: 420.01px) and (max-width: 1024px) {
    .show-messages {
      width: 350px;
      right: -23px;

      .arrow-top {
        right: 35px;
        left: auto;
      }
    }
  }
`;
