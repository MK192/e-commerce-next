"use client";
import styled from "styled-components";
import { theme } from "@/app/styles/variables";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  overflow: hidden;
  ${theme.lightGrayBg};
  padding: 0 10px;
  box-shadow: 0 1px 6px 0 rgb(32 33 36/17%);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  .cart-nav {
    position: relative;
  }

  strong {
    font-size: 2.4rem;
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
  .cart-item-nav {
    z-index: 0;
    position: absolute;
    right: -80px;
    background-color: orange;
    top: 15px;
    font-size: 12px;
    font-weight: 700;
    font-style: italic;
    padding: 4px 19px 4px 10px;
    border-radius: 27px 0 0 27px;
    white-space: nowrap;
    animation-name: wrap;
    animation-duration: 1.6s;
    animation-timing-function: ease-out;
  }
  .cart-item-hidden-nav {
    position: absolute;
    z-index: 5;
    color: #f8fcfc;
    right: -10px;
    width: 50px;
    ${theme.lightGrayBg}
    top: 15px;
    font-size: 12px;

    font-weight: 700;
    font-style: italic;
    padding: 4px 19px 4px 10px;
    border-radius: 27px 0 0 27px;
    white-space: nowrap;
  }
`;
