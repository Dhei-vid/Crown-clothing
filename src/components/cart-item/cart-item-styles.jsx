import styled from "styled-components";

export const CartItemsContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const Image = styled.img`
  width: 40%;
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const Name = styled.div`
  font-size: 16px;
`;

/**
 * Styles before conversion
 */

// .cart-item-container {
//   width: 100%;
//   display: flex;
//   height: 80px;
//   margin-bottom: 15px;

//   img {
//     width: 30%;
//   }

//   .item-details {
//     width: 70%;
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//     padding: 10px 20px;

//     .name {
//       font-size: 16px;
//     }
//   }
// }
