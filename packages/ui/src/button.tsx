import * as React from "react";
import type { CSSObject } from '@emotion/serialize'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  sx?: CSSObject;
}

export function Button({ children, sx,...other }: ButtonProps): JSX.Element {
  return (
    <button css={{ background: "red", ...sx }} type="button" {...other}>
      {children}
    </button>
  );
}

Button.displayName = "Button";
