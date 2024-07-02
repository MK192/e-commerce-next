"use client";
import styled from "styled-components";

export const StyledCart = styled.div`
  .number-of-items-nav {
    position: absolute;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    color: black;
    position: absolute;
    right: 5px;
    top: 9px;
    height: 20px;
    width: 20px;
    background-color: orange;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .empty-cart-image-nav {
    position: relative;
    height: 40px;
    width: 45px;
    filter: grayscale(100%);
    z-index: 100;
  }
  .cart-image-nav {
    height: 40px;
    width: 45px;
    position: relative;
    z-index: 100;
  }
`;
