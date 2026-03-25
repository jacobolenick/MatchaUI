import * as React from "react";
import { cn } from "../../lib/utils";

export type DataTableToolbarProps = {
  /** Primary row: filters / search */
  start?: React.ReactNode;
  /** End row: bulk actions, export */
  end?: React.ReactNode;
} & React.ComponentProps<"div">;

/**
 * Layout shell for SaaS data tables: search/filters on the left, actions on the right.
 * Stacks on small screens.
 */
export function DataTableToolbar({
  start,
  end,
  className,
  children,
  ...props
}: DataTableToolbarProps) {
  if (children) {
    return (
      <div
        className={cn(
          "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
        className
      )}
      {...props}
    >
      {start ? (
        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
          {start}
        </div>
      ) : null}
      {end ? (
        <div className="flex shrink-0 flex-wrap items-center justify-end gap-2">
          {end}
        </div>
      ) : null}
    </div>
  );
}
