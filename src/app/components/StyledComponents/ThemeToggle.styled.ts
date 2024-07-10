import styled from "styled-components";

type Theme = {
  theme: string;
};

export const StyledThemeToggle = styled.div<Theme>`
  position: absolute;
  top: 0.5rem;
  left: 12rem;
  .toggle {
    visibility: hidden;
  }

  .toggle + label {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    cursor: pointer;
  }

  .toggle + label::before {
    content: "";
    height: 1.4rem;
    width: 2.8rem;
    border-radius: 1rem;
    background-color: ${({ theme }) =>
      theme === "dark" ? "#39486b" : "#f0eb9d"};
    margin-right: 0.8rem;
    transition: background-color 250ms ease-in-out;
  }

  .toggle + label::after {
    content: "";
    height: 1.1rem;
    width: 1.1rem;
    border-radius: 1rem;
    background-color: #ffd000;
    position: absolute;
    left: 0.3rem;
    transition: background-color 250ms ease-in-out, transform 250ms ease-in-out;
  }

  .toggle:checked + label::after {
    transform: translateX(100%);
  }
`;
