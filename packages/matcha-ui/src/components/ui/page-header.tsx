import * as React from "react";
import { cn } from "../../lib/utils";

export type PageHeaderProps = {
  title: string;
  description?: string;
  actions?: React.ReactNode;
} & React.ComponentProps<"div">;

export function PageHeader({
  title,
  description,
  actions,
  className,
  ...props
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 border-b px-4 py-6 sm:flex-row sm:items-start sm:justify-between sm:px-6",
        className
      )}
      {...props}
    >
      <div className="min-w-0 space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {description ? (
          <p className="text-muted-foreground text-sm">{description}</p>
        ) : null}
      </div>
      {actions ? (
        <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div>
      ) : null}
    </div>
  );
}
