"use client";
import styled from "styled-components";

type Theme = {
  theme: string;
};
export const StyledFilter = styled.header<Theme>`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  max-width: 90rem;
  padding: 1.5rem 3rem;
  width: 100%;
  font-size: 1.6rem;
  margin-top: 50px;
  input {
    height: 2.7rem;
    width: 18rem;
    border-radius: 5px;
    border: 1px solid gray;
    padding: 5px;
  }
  
  .category {
     color: white;
    }
    .clear-paragraph {
      color: white;
    }
    .change-paragraph {
      color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
    }

    strong {
      color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
    }
  }
  .selected-category {
    cursor: pointer;
  }
  .selected-all:hover {
    cursor: pointer;
  }
  .selected-all {
    border: 1px solid #46940d;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    gap: 10px;
  }
`;
