"use client";
import styled from "styled-components";
import { theme } from "../../styles/variables";

export const StyledItemCard = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid #cfcfcf;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-bottom: 10px;
  width: 26.66rem;
  height: 45.6rem;
  ${theme.lightGrayBg};
  padding: 20px 15px 12px;
  position: relative;

  img {
    height: 24.9rem;
    width: 100%;
    object-fit: contain;
    object-position: center;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .add-button {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 4.5rem;
    height: 4.5rem;
  }
  .plus-paragraph {
    font-size: 25px;
    color: black;
  }

  .price {
    align-self: flex-start;
    font-size: 18px;
    ${theme.darkGreenText}
    font-weight: bold;
    padding-bottom: 10px;
  }
  .title {
    font-weight: 500;
    display: block;
    color: #00008b;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 44px;
    font-size: 18px;
  }
  .description {
    max-width: 21rem;
    line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 48px;
    font-size: 12px;
    margin-bottom: 10px;
  }
  .category {
    ${theme.blueText}
    align-self: flex-start;
    font-size: 11px;
    text-transform: uppercase;
    cursor: pointer;
  }
`;
