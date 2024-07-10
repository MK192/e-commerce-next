"use client";
import styled, { RuleSet } from "styled-components";

type ButtonProps = {
  version: string;
  $borderColor: string;
  $backgroundColor: string | RuleSet<object>;
};
export const StyledButton = styled.button<ButtonProps>`
  ${({ version, $borderColor, $backgroundColor }) => {
    switch (version) {
      case "filter":
        return `
           padding: 3px 5px;
           border-radius: 5px;
           cursor: pointer;
           border: ${
             $borderColor === "none" ? "none" : `1px solid ${$borderColor}`
           };
            background-color:${$backgroundColor};
            margin-left: 5px;
        `;
      case "rounded":
        return `
        border: ${
          $borderColor === "none" ? "none" : `1px solid ${$borderColor}`
        };
         color: white;
         border-radius: 50%;
         background-color: ${$backgroundColor};
         color: white;   
         width:100%;
         height:100%;
         cursor: pointer;
        `;

      default:
        return `
        color: #fff;
        padding: 10px 5px;
        margin-bottom: 10px;
        min-width: 90px;
        border-radius: 5px;
        cursor: pointer;
       border: ${
         $borderColor === "none" ? "none" : `1px solid ${$borderColor}`
       };
        background-color:${$backgroundColor};
      }
        `;
    }
  }}
`;
