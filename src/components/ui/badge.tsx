import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "indigo"
    | "cyan"
    | "violet"
    | "emerald"
    | "amber";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/80",
    outline: "text-foreground border border-input hover:bg-accent",
    indigo: "bg-indigo/10 text-indigo border border-indigo/20",
    cyan: "bg-cyan/10 text-cyan border border-cyan/20",
    violet: "bg-violet/10 text-violet border border-violet/20",
    emerald: "bg-emerald/10 text-emerald border border-emerald/20",
    amber: "bg-amber/10 text-amber border border-amber/20",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
