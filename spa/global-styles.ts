import { createGlobalStyle } from 'styled-components';
import {DefaultFont} from "./app/theme/styles";
import globalStylesCalendar from './global-styles-calendar';

const GlobalStyle = createGlobalStyle`
    .ui.input.error > input,
    .error.field .ui.input input {
      background-color: blue;
      border-color: red !important;
      color: blue;
      box-shadow: none;
    }

    button, input, optgroup, select, textarea {
      ${DefaultFont};
    }
    
    .ui.disabled.input,
    .ui.input:not(.disabled) input[disabled] {
      background-color: gray;
    }

    .ui.message > .close.icon {
      color: black;
    }

    .ui.form .inline.fields .field:not(.wide) .ui.input, .ui.form .inline.field:not(.wide) .ui.input {
      width: 100%;
    }

    .ui.icon.input > i.icon {
      height: 90%;
    }
   
    .ui.selection.dropdown,
    .ui.dropdown > input,
    .ui.input > input,
    .ui.input > input:focus,
    .ui.form input,
    .ui.form input:focus,
    .ui.form input[type],
    .ui.form input[type]:focus,
    .ui.form textarea,
    .ui.form textarea:focus,
    textarea {
      background-color: rgba(240,240,240,255);
      color:gray;
      border-radius: 3px;
      border: 1px solid rgba(240,240,240,255);
      padding: 1rem;
      width: 100%;
      height: 4rem;
      margin-bottom: .5rem;
      font-size: 14px;
          
      &::placeholder {
        color: gray !important;
      }
          
      .menu > .item {
        border-color: gray;
        color: blue;
      }
    }

    ${globalStylesCalendar};
    
    .ui.input > input:active, .ui.input.down input {
      background-color: grey;
    }
`;

export default GlobalStyle;
