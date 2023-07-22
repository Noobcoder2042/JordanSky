import React, { useEffect, useState } from "react";
import { monthlyData, quarterlyData } from "../Api/GraphData";
import Title from "../component/Graph/Title";
import LineChartComponent from "../component/Graph/LineChart";
import BarChartComponent from "../component/Graph/BarChart";
import Buttons from "../component/Graph/Buttons";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Graph = () => {
  const [chartData, setChartData] = useState([]);
  const [title, setTitle] = useState();

  const prepareChartData = (data) => {
    setTitle(data.title);
    let tempChartData = [];
    data.labels.forEach((element, index) => {
      let chartObj = {
        label: element,
        value: data.data[index],
      };
      tempChartData.push(chartObj);
    });
    setChartData(tempChartData);
  };

  useEffect(() => {
    prepareChartData(monthlyData);
  }, []);

  const handleMonthlyClick = () => {
    prepareChartData(monthlyData);
  };

  const handleQuarterlyClick = () => {
    prepareChartData(quarterlyData);
  };
  const button =
    "flex justify-center items-center gap-3 bg-[#4a3aff] rounded-lg py-[14px] px-6 font-bodyFont text-white m-5 font-semibold hover:bg-[#311ff4] hover:translate-y-[-1.5px] duration-300";
  return (
    <div className="bg-gradient-to-br from-blue-100 via-white to-blue-100 min-h-screen p-4 md:p-8">
      <div className="flex justify-between">
        <Link to="/">
          <button className={button}>
            <AiOutlineArrowLeft />
            Home Page
          </button>
        </Link>
        <Link to="/table">
          <button className={button}>
            Table Page
            <AiOutlineArrowRight />
          </button>
        </Link>
      </div>
      <Title title={title} />
      <div className="m-5">
        <Buttons
          onMonthlyClick={handleMonthlyClick}
          onQuarterlyClick={handleQuarterlyClick}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 md:mb-10">
        <div className="col-span-2">
          <LineChartComponent chartData={chartData} />
        </div>
        <div className="col-span-2">
          <BarChartComponent chartData={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Graph;
