import React from "react";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const LineChartComponent = ({ chartData }) => {
  return (
    <div className="w-full h-60 md:h-96">
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={chartData} margin={{ right: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" interval={"preserveStartEnd"} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="linear"
            dataKey="value"
            stroke="url(#line-gradient)"
            strokeWidth={3}
            dot={{ r: 8 }}
          />
          <defs>
            <linearGradient id="line-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
