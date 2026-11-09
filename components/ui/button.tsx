import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

export function Button({ children, type = "button", variant = "primary", ...props }: ButtonProps) {
  return (
    <button {...props} type={type} className={`button button--${variant}`}>
      {children}
    </button>
  );
}
