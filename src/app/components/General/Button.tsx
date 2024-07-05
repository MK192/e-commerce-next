import { ReactNode } from "react";
import { RuleSet } from "styled-components";

//style
import { StyledButton } from "../StyledComponents/Button.styled";

interface Props {
  version?: "default" | "filter" | "rounded";
  borderColor?: string;
  backgroundColor?: string | RuleSet<object>;
  handleClick: () => void;
  children: ReactNode;
}
export default function Button({
  version = "default",
  borderColor = "none",
  backgroundColor = "transparent",
  handleClick,
  children,
}: Props) {
  return (
    <StyledButton
      type="button"
      onClick={handleClick}
      version={version}
      $borderColor={borderColor}
      $backgroundColor={backgroundColor}
    >
      {children}
    </StyledButton>
  );
}
