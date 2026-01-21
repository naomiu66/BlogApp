import type { ReactNode } from "react";

export interface BlogContainer {
  title: string;
  children: ReactNode;
  variant?: "black" | "pink";

  actionLabel?: string; 
  onActionClick?: () => void; 
}
