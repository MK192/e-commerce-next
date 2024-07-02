"use client";
import styled from "styled-components";

export const StyledItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90rem;
  justify-content: center;
  margin: 0 auto;
  flex-wrap: wrap;
  padding: 0 10px;
  column-gap: 20px;
  row-gap: 10px;
  position: relative;

  .items {
    display: flex;
    align-items: center;
    max-width: 90rem;
    justify-content: center;
    margin: 0 auto;
    flex-wrap: wrap;
    padding: 0 10px;
    column-gap: 20px;
    row-gap: 10px;
    position: relative;
  }

  .loading {
    animation: rotation 2s infinite linear;
    object-fit: contain;
    height: 100%;
    width: auto;
    margin: 0 auto;
    padding: 20px 0;
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
