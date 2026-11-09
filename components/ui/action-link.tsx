import type { AnchorHTMLAttributes, ReactNode } from "react";

type ActionLinkVariant = "primary" | "secondary" | "text";

type ActionLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
  children: ReactNode;
  variant?: ActionLinkVariant;
};

export function ActionLink({ children, variant = "primary", ...props }: ActionLinkProps) {
  return (
    <a {...props} className={`action-link action-link--${variant}`}>
      <span>{children}</span>
      {variant !== "text" && (
        <span className="action-link__arrow" aria-hidden="true">
          →
        </span>
      )}
    </a>
  );
}
