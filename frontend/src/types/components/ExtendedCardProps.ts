import type { BlogCardProps } from "./BlogCardProps";

export interface ExtendedCardProps extends BlogCardProps {
  variant?: "black" | "pink";
  fullWidth?: boolean
}

