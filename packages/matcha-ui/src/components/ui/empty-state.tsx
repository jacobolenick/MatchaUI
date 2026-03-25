import * as React from "react";
import { cn } from "../../lib/utils";

export type EmptyStateProps = {
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  description?: string;
  action?: React.ReactNode;
} & React.ComponentProps<"div">;

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      role="status"
      className={cn(
        "border-border/80 flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed p-8 text-center sm:p-12",
        className
      )}
      {...props}
    >
      {Icon ? (
        <Icon className="text-muted-foreground size-10 shrink-0" />
      ) : null}
      <div className="max-w-md space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description ? (
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="flex flex-wrap justify-center gap-2">{action}</div> : null}
    </div>
  );
}
