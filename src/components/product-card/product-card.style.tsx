import styled from "styled-components";
import Button from "../button/button-component";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 45vw;

    button {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;

      &:hover {
        img {
          opacity: unset;
        }

        button {
          opacity: unset;
        }
      }
    }
  }
`;

export const Name = styled.div`
  width: 90%;
  margin-bottom: 20px;
`;

export const ButtonStyle = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  &:hover {
    img {
      opacity: 0.8;
    }
`;

export const OpaqueButton = styled(ButtonStyle)`
  opacity: 0.85;
  display: flex;
`;

export const Footer = styled.div`
  width: 98%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;

export const Price = styled.div`
  width: 10%;
`;
