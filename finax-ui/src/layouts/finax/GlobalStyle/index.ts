import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

  :root {
    --background-body: #FAF9FA;

    --color-neutral-bright: #FFFFFF;
    --color-neutral-soft: #F5F5F5;
    --color-neutral-soft-light: #EAEAEA;
    --color-neutral-base: #D5D5D5;
    --color-neutral-light: #B0B0AF;
    --color-neutral-medium: #6E6E6E;
    --color-neutral-dark: #3F3F3C;
    --color-neutral-soft-black: #292927;
    --color-black: #000;

    --color-primary-bright: #D0E1F0;
    --color-primary-button: #37D26A;
    --color-primary-light: #B9D2E9;
    --color-feedback-tips-base: #1473E6;
    --color-feedback-tips-pure: #115FBD;
    --color-primary: #1C8EFF; // #8f48b0;
    --color-primary-pure: #004B90;
    --color-primary-dark: #F2C705;

    --color-feedback-danger-pure: #E8503E;
    --color-feedback-danger-soft-dark: #D14838;

    --color-feedback-attention-base: #FCC216;
    --color-feedback-attention-pure: #E6B114;

    --color-feedback-success-base: #36B37E;
    --color-feedback-success-pure: #2D9368;
    --color-feedback-success-dark: #237251;
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--background-body);
    font-family: 'Open Sans', 'Roboto', sans-serif;
    min-height: 100vh;
    background: url('/bg.png') no-repeat;
    background-position: 100% 100%;

    scrollbar-color: var(--color-neutral-light) var(--background-body);
    scrollbar-width: thin;

    &::-webkit-scrollbar-track
    {
      background-color: transparent;
      cursor: pointer;
    }

    &::-webkit-scrollbar
    {
      width: 10px;
      background-color: var(--background-body);
      cursor: pointer;
    }

    &::-webkit-scrollbar-thumb
    {
      background-color: var(--color-primary);
      border-radius: 50px;
      cursor: pointer;
    }

    #root {
      display: flex;
    }
  }

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    th {
      margin: 0px;
      padding: 0px;
    }
    td {
      margin: 0px;
      padding: 0px;
    }
    tr {
      td > .action {
        border: none;
        background: none;
        cursor: pointer;
      }
    }
  }

  .body-pages {
    display: block;
    padding: 24px;
    width: 100%;
  }

  .mb-8 {
    margin-bottom: 8px;
  }

  .mb-16 {
    margin-bottom: 16px;
  }

  .mb-32 {
    margin-bottom: 32px;
  }

  .mt-8 {
    margin-top: 8px;
  }

  .mt-4 {
    margin-top: 4px;
  }

  .mt-16 {
    margin-top: 16px;
  }

  .mt-32 {
    margin-top: 32px;
  }

  .mr-8 {
    margin-right: 8px;
  }

  .container {
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    padding:10px;
  }

  .MuiFilledInput-root {
    background-color: var(--color-neutral-soft) !important;
  }

  .MuiInputBase-root  {
   # font-family: 'Open Sans', 'Roboto', sans-serif !important;
  }

  .Mui-focused {

    .MuiFilledInput-underline:after {
      //border-bottom: 2px solid var(--color-feedback-tips-base);
      border-bottom: 2px solid var(--color-primary-button) !important;
    }

    label {
      &.Mui-focused {
        color: var(--color-feedback-tips-base);
      }
    }
  }
  .MuiSwitch-switchBase {
    top:5px !important;
    color: var(--color-neutral-light) !important;
  }
  .MuiSwitch-colorPrimary.Mui-checked {
    color: var(--color-primary-button) !important;
    top:5px !important;

    .MuiSwitch-track {
      background-color:var(--color-neutral-base) !important;
    }
    
  }

  .MuiSwitch-track  {
    background-color:var(--color-neutral-base) !important;
  }

 

  .MuiFilledInput-underline:after {
    //border-bottom: 2px solid var(--color-feedback-tips-base);
    border-bottom: 2px solid var(--color-primary-button) !important;
  }

  .MuiCircularProgress-colorPrimary {
    color: var(--color-neutral-base) !important;
  }

  label {
    &.Mui-focused {
      color: var(--color-primary-button);
    }
  }

  .p-16 {
    padding: 0px 16px;
  }

  .p-8 {
    padding: 0px 8px;
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .MuiDialog-root {
    z-index: 99999 !important;
  }

  .MuiCheckbox-colorPrimary.Mui-checked {
    //color: var(--color-feedback-tips-base) !important;
    color: var(--color-primary-button) !important;
  }

  #customized-dialog-title {
    h6 {
      font-size: 18px;
      color: var(--color-neutral-soft-black);
      font-weight: 500;
    }
    .modal-subtitle {
      font-size: 13px;
      color: var(--color-neutral-medium);
      font-weight: 400;
    }
  }

  .MuiAutocomplete-popper {
    z-index: 99999 !important;
  }

  .MuiFormLabel-root {
    font-size: 14px !important;
    top: 4px !important;
  }

  .MuiFormControl-marginNormal {
    margin: 0px !important;
  }

  .MuiButtonBase-root {
    text-transform: none !important;
  }

  .MuiAccordionSummary-content.Mui-expanded {
    max-height: 38px !important;
    margin: 0px !important;
  }

  @media (min-width: 600px) {
    .MuiTab-root {
        min-width: 60px !important;
    }
  }
  .MuiChip-root {
    height: 17px !important;

    .MuiChip-label {
      padding-left: 6px !important;
      padding-right: 16px !important;
      font-size: 12px;
      line-height: 14px;
      color: var(--color-neutral-dark);
    }

    .MuiChip-deleteIcon {
      width: 12px;
      height: 12px;
    }
  }

  .MuiFormControl-root {
    width: 100%;
    .MuiFormGroup-root {
      width: 100%;
      justify-content: space-between;
      padding: 16px 32px;
    }
  }

  @media screen and (max-width: 620px) {
    body {
      background: none;
    }
    .MuiFormControl-root {
    .MuiFormGroup-root {
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
    }
  }
  }

  .MuiTypography-root.MuiFormControlLabel-label.MuiTypography-body1 {
    font-size: 12px;
    color: var(--color-neutral-medium);
  }

  .padding-horizontal-16 {
    padding: 0px 16px;
  }

  .padding-horizontal-32 {
    padding: 0px 32px;
  }

  p {
    font-size: 12px;
    color: var(--color-neutral-medium);
  }

  .MuiButton-outlinedPrimary {
    border: 1px solid var(--color-primary) !important;
    svg {
      color: var(--color-primary);
    }
    .text {
      color: var(--color-primary);
    }
  }

  .MuiRadio-colorPrimary.Mui-checked {
    color: var(--color-feedback-tips-base) !important;
  }

  .PrivateSwitchBase-root-15 {
    padding:0px !important;
  }

  .MuiRadio-root {
    margin-right: 6px !important;
  }

  .swal2-container {
      z-index: 99999;
  }

  .MuiButton-contained {
    box-shadow: none !important;
    color: var(--color-neutral-bright) !important;
    background-color: var(--color-neutral-light) !important;
  }

  .MuiButton-containedPrimary {
    //background-color: var(--color-primary) !important;
    background-color: var(--color-primary-button) !important;
  }
  .MuiButton-containedSecondary {
    background-color: var(--color-feedback-danger-pure) !important;
  }
  .MuiButton-colorInherit {
    background-color: var(--color-neutral-soft) !important;
    color: var(--color-neutral-light) !important;
  }

  .MuiTooltip-popper {
    z-index: 99999999 !important;
  }

  .btn-action-new-filter {
    display: flex;
    justify-content: flex-end;
    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 10px;
      border: 1px solid var(--color-primary);
      box-sizing: border-box;
      border-radius: 3px;
      outline: none;
      background-color: var(--color-neutral-bright);
      transition: all 0.3s;
      cursor: pointer;
      svg {
        display: flex;
        font-size: 18px;
        color: var(--color-primary);
      }
      .text {
        font-size: 12px;
        line-height: 18px;
        font-weight: 400;
        color: var(--color-primary);
        margin-left: 4px;
      }
      &:hover {
        background-color: var(--color-primary);
        svg {
          color: var(--color-neutral-bright);
        }
        .text {
          color: var(--color-neutral-bright);
        }
      }
    }
  }
  .results {
    font-size: 12px;
    color: var(--color-neutral-medium);
    font-weight: 400;
  }

  .type-cas {
    margin-right: 5px;
    padding: 2px 6px;
    text-align: center;
    border-radius: 3px;
    background-color: var(--color-feedback-attention-base);
    font-size: 11px;
    color: var(--color-neutral-bright);
    cursor: default;
  }

  .type-mnt {
    margin-right: 5px;
    padding: 2px 6px;
    text-align: center;
    border-radius: 3px;
    background-color: var(--color-feedback-tips-base);
    font-size: 11px;
    color: var(--color-neutral-bright);
    cursor: default;
  }

  .type-sys {
    margin-right: 5px;
    padding: 2px 3px;
    text-align: center;
    border-radius: 3px;
    background-color: var(--color-neutral-bright);
    font-size: 9px;
    color: var(--color-black);
    border: 1px solid var(--color-black);
    cursor: default;
  }

  .no-select {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .MuiIconButton-root {
    padding: 4px !important;
  }

  .close-notistack {
    color: var(--color-neutral-bright);
    svg {
      color: var(--color-neutral-bright);
    }
    &:hover {
      background: transparent;
    }
  }

  .update-notistack {
    color: var(--color-neutral-bright);
    .MuiButton-label {
      color: var(--color-neutral-bright);
      text-decoration: underline;
    }
  }
`;

export default GlobalStyle;
