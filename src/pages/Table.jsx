import React, { useEffect, useState } from "react";
import TableData from "../Api/TableData.json";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Table = () => {
  const [data, setData] = useState([]);

  const changeExpanded = (curr) => {
    curr.isExpanded = !curr.isExpanded;
    setData(JSON.parse(JSON.stringify(data)));
  };

  useEffect(() => {
    setData(TableData);
  }, []);

  const tableContainer = "font-bodyFont bg-blue-200 p-5 h-screen";
  const button =
    "flex justify-center items-center gap-3 bg-[#4a3aff] rounded-lg py-[14px] px-6 font-bodyFont text-white m-5 font-semibold hover:bg-[#311ff4] hover:translate-y-[-1.5px] duration-300";
  const tableHeader = "bg-blue-500 text-white duration-300";
  const tableRow = "bg-blue-100 hover:bg-blue-200 duration-300";
  const tableSubRow = "bg-blue-200 hover:bg-blue-300 duration-300";
  const tableSubSubRow = "bg-blue-300 hover:bg-blue-400 duration-300";
  const tableSubSubSubRow = "bg-blue-400 hover:bg-blue-500 duration-300";
  const iconButton =
    "py-4 px-6 flex items-center gap-2 cursor-pointer duration-300";

  const renderRow = (row, level) => {
    const {
      account_name,
      account_code,
      children,
      current,
      previous,
      isExpanded,
    } = row;
    const rowClass =
      level === 1
        ? tableRow
        : level === 2
        ? tableSubRow
        : level === 3
        ? tableSubSubRow
        : tableSubSubSubRow;
    console.log(row);
    return (
      <React.Fragment key={account_name}>
        <tr className={rowClass}>
          <td
            className={`py-4 px-6 flex gap-2 items-center ${iconButton}`}
            onClick={() => changeExpanded(row)}
          >
            {children &&
              (row.isExpanded ? <AiFillMinusCircle /> : <BsPlusCircleFill />)}
            <span className="font-medium">{account_name}</span>
          </td>
          <td className="py-4 px-6">{account_code}</td>
          <td className="py-4 px-6">
            {row.isExpanded || !children ? current : row.children_total_current}
          </td>
          <td className="py-4 px-6">
            {row.isExpanded || !children
              ? previous
              : row.children_total_previous}
          </td>
        </tr>
        {children &&
          row.isExpanded &&
          Object.keys(children).map((childId) => {
            console.log(childId);
            children[childId]["account_code"] = childId;
            return renderRow(children[childId], level + 1);
          })}
      </React.Fragment>
    );
  };

  return (
    <div className={tableContainer}>
      <div className="flex justify-between">
        <Link to="/">
          <button className={button}>
            <AiOutlineArrowLeft />
            Home Page
          </button>
        </Link>
        <Link to="/graph">
          <button className={button}>
            Graph Page
            <AiOutlineArrowRight />
          </button>
        </Link>
      </div>

      <div className="flex justify-center">
        <h1 className="text-5xl font-semibold mt-5 text-white">TABLE PAGE</h1>
      </div>

      <table className="mt-5 bg-white shadow-md rounded-lg overflow-hidden w-full my-5">
        <thead className={tableHeader}>
          <tr>
            <th className="py-4 px-6 font-semibold">ACCOUNT</th>
            <th className="py-4 px-6 font-semibold">ACCOUNT CODE</th>
            <th className="py-4 px-6 font-semibold">CURRENT TOTAL</th>
            <th className="py-4 px-6 font-semibold">PREVIOUS TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map((rowData, index) => {
            

          
            rowData["account_code"] = Object.keys(data)[index];
            return renderRow(rowData, 1);
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
