// Example interface for reusable props
export interface ButtonProps {
  label: string;
  onClick?: () => void;
}
// Card Props Interface
export interface CardProps {
  title: string;
  content: string;
}
export interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}
