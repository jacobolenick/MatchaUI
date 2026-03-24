"use client";

import * as React from "react";
import {
  Line,
  LineChart as ReLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { ChartLine } from "phosphor-react";
import { cn } from "../../lib/utils";
import { ChartCard } from "./chart-card";

export type ChartDatum = { label: string; value: number };

export type LineChartCardProps = {
  title: string;
  description?: string;
  data: ChartDatum[];
  color?: string;
  height?: number;
  className?: string;
  valueFormatter?: (value: number) => string;
};

export function LineChartCard({
  title,
  description,
  data,
  color = "var(--color-primary)",
  height = 260,
  className,
  valueFormatter,
}: LineChartCardProps) {
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
      icon={<ChartLine weight="bold" className="size-4 text-primary" />}
      title={title}
      description={description}
      className={cn("min-w-0", className)}
    >
      <ResponsiveContainer width="100%" height={height}>
        <ReLineChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
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
            cursor={{ stroke: color, strokeWidth: 1 }}
            labelStyle={{ color: "var(--color-foreground)", fontSize: 12 }}
            contentStyle={{
              background: "var(--color-popover)",
              border: "1px solid var(--color-border)",
              borderRadius: 10,
            }}
            formatter={(value) => [formatValue(value), ""]}
            labelFormatter={(label) => String(label)}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            dot={{ r: 3, fill: color, stroke: color, strokeWidth: 1 }}
            activeDot={{ r: 5 }}
          />
        </ReLineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

