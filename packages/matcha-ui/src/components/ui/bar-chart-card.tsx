"use client";

import * as React from "react";
import {
  Bar,
  BarChart as ReBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { ChartBar } from "phosphor-react";
import { cn } from "../../lib/utils";
import { ChartCard } from "./chart-card";
import type { ChartDatum } from "./line-chart-card";

export type BarChartCardProps = {
  title: string;
  description?: string;
  data: ChartDatum[];
  color?: string;
  height?: number;
  className?: string;
  valueFormatter?: (value: number) => string;
};

export function BarChartCard({
  title,
  description,
  data,
  color = "var(--color-primary)",
  height = 260,
  className,
  valueFormatter,
}: BarChartCardProps) {
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
      icon={<ChartBar weight="bold" className="size-4 text-primary" />}
      title={title}
      description={description}
      className={cn("min-w-0", className)}
    >
      <ResponsiveContainer width="100%" height={height}>
        <ReBarChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="currentColor" strokeOpacity={0.12} vertical={false} />
          <XAxis
            dataKey="label"
            tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            minTickGap={10}
          />
          <YAxis
            tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            width={48}
            tickFormatter={(v) => formatValue(v)}
          />
          <Tooltip
            cursor={{ fill: color, opacity: 0.12 }}
            labelStyle={{ color: "var(--color-foreground)", fontSize: 12 }}
            contentStyle={{
              background: "var(--color-popover)",
              border: "1px solid var(--color-border)",
              borderRadius: 10,
            }}
            formatter={(value) => [formatValue(value), ""]}
            labelFormatter={(label) => String(label)}
          />
          <Bar dataKey="value" fill={color} radius={[8, 8, 0, 0]} />
        </ReBarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

