import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button-styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 18px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  overflow: scroll;

  // I can target inside the styled component
  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 19px;
  margin: 50px auto;
  color: #adb5bd;
`;

/**
 * Styles before conversion
 */

// .cart-dropdown-container {
//   position: absolute;
//   width: 240px;
//   height: 340px;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   border: 1px solid black;
//   background-color: white;
//   top: 90px;
//   right: 40px;
//   z-index: 5;

//   .empty-message {
//     font-size: 18px;
//     margin: 50px auto;
//   }

//   .cart-items {
//     height: 240px;
//     display: flex;
//     flex-direction: column;
//     overflow: scroll;
//   }

//   button {
//     margin-top: auto;
//   }
// }
