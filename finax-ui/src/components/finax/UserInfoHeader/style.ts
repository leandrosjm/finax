import styled from 'styled-components';

interface IUserInfoHeaderContainerProps {
  viewOpenMobile?: boolean;
}

export const UserInfoHeaderContainer = styled.div<IUserInfoHeaderContainerProps>`
  @media only screen and (min-width: 0px) and (max-width: 1024px) {
    display: ${(props) => (props.viewOpenMobile ? 'flex' : 'none')};
  }

  display: inline-flex;
  align-items: center;

  .icon-name {
    height: 28px;
    width: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    color: var(--color-neutral-bright);
    background-color: var(--color-primary);
    margin-right: 10px;
    border-radius: 50px;
  }

  .info-user {
    h4 {
      font-size: 12px;
      color: var(--color-neutral-soft-black);
      line-height: 10px;
    }

    h5 {
      font-size: 11px;
      color: var(--color-neutral-light);
      font-weight: 400;
      line-height: 10px;
      margin-top: 2px;
    }

    h6 {
      font-size: 10px;
      color: var(--color-neutral-light);
      font-weight: 700;
      line-height: 10px;
      margin-top: 2px;
    }
  }
`;
