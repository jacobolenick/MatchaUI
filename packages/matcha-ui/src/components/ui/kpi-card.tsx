import * as React from "react";
import { cn } from "../../lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

export type KpiCardProps = {
  label: string;
  value: React.ReactNode;
  hint?: React.ReactNode;
} & React.ComponentProps<typeof Card>;

export function KpiCard({
  label,
  value,
  hint,
  className,
  ...props
}: KpiCardProps) {
  return (
    <Card className={cn("", className)} {...props}>
      <CardHeader className="pb-2">
        <CardDescription>{label}</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums">{value}</CardTitle>
      </CardHeader>
      {hint ? (
        <CardContent className="text-muted-foreground pt-0 text-xs">{hint}</CardContent>
      ) : null}
    </Card>
  );
}
