import React from "react";
import {
  BarChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const BarChartComponent = ({ chartData }) => {
  return (
    <div className="w-full h-60 md:h-96 mt-6 md:mt-8">
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart data={chartData} margin={{ right: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" interval={"preserveStartEnd"} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="url(#bar-gradient)" barSize={20} />
          <defs>
            <linearGradient id="bar-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
