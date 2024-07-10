import styled from "styled-components";

export const StyledThemeToggle = styled.div`
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
    color: var(--primary-text-color);
  }

  .toggle + label::before {
    content: "";
    height: 1em;
    width: 2em;
    border-radius: 1em;
    background-color: var(--toggle-bg);
    margin-right: 0.5em;
    transition: background-color 250ms ease-in-out;
  }

  .toggle + label::after {
    content: "";
    height: 0.8em;
    width: 0.8em;
    border-radius: 1em;
    background-color: var(--toggle-fg);
    position: absolute;
    left: 0.2em;
    transition: background-color 250ms ease-in-out, transform 250ms ease-in-out;
  }

  .toggle:checked + label::after {
    transform: translateX(100%);
  }
`;
