"use client";

import * as React from "react";
import {
  Cell,
  Pie,
  PieChart as RePieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ChartPie } from "phosphor-react";
import { cn } from "../../lib/utils";
import { ChartCard } from "./chart-card";
import type { ChartDatum } from "./line-chart-card";

export type DonutChartCardProps = {
  title: string;
  description?: string;
  data: ChartDatum[];
  height?: number;
  className?: string;
  colors?: string[];
  valueFormatter?: (value: number) => string;
  innerRadius?: number;
};

export function DonutChartCard({
  title,
  description,
  data,
  height = 260,
  className,
  colors = [
    "var(--color-primary)",
    "var(--color-accent)",
    "var(--color-secondary)",
    "var(--color-chart-1)",
    "var(--color-chart-2)",
  ],
  valueFormatter,
  innerRadius = 58,
}: DonutChartCardProps) {
  const formatValue = React.useCallback(
    (v: unknown) => {
      const n = typeof v === "number" ? v : Number(v);
      if (Number.isNaN(n)) return String(v);
      return valueFormatter ? valueFormatter(n) : n.toLocaleString();
    },
    [valueFormatter]
  );

  return (
    <ChartCard
      icon={<ChartPie weight="bold" className="size-4 text-primary" />}
      title={title}
      description={description}
      className={cn("min-w-0", className)}
    >
      <div className="grid w-full gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
        <div className="w-full sm:max-w-[240px]">
          <ResponsiveContainer width="100%" height={height}>
            <RePieChart>
              <Tooltip
                contentStyle={{
                  background: "var(--color-popover)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 10,
                }}
                formatter={(value) => [formatValue(value), ""]}
                labelFormatter={(label) => String(label)}
              />
              <Pie
                data={data}
                dataKey="value"
                nameKey="label"
                innerRadius={innerRadius}
                outerRadius={innerRadius + 18}
                paddingAngle={1}
              >
                {data.map((d, i) => (
                  // One color per slice.
                  <Cell key={d.label} fill={colors[i % colors.length]} />
                ))}
              </Pie>
            </RePieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-2">
          {data.map((d, i) => (
            <div
              key={d.label}
              className="flex items-center justify-between gap-3 text-sm"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span
                  className="size-2 rounded-full shrink-0"
                  style={{ background: colors[i % colors.length] }}
                />
                <span className="truncate">{d.label}</span>
              </div>
              <span className="text-muted-foreground tabular-nums">
                {formatValue(d.value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </ChartCard>
  );
}

