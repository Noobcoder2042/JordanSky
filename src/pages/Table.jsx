import React, { useEffect, useState } from "react";
import TableData from "../Api/TableData.json";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
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
          {Object.keys(data).map((accNum) => {
            const acc = data[accNum];

            return (
              <React.Fragment key={accNum}>
                <tr className={tableRow}>
                  <td
                    className={`py-4 px-6 flex gap-2 items-center ${iconButton}`}
                    onClick={() => changeExpanded(acc)}
                  >
                    {acc.children ? (
                      acc.isExpanded ? (
                        <AiFillMinusCircle />
                      ) : (
                        <BsPlusCircleFill />
                      )
                    ) : null}
                    <span className="font-medium">{acc.account_name}</span>
                    
                  </td>
                 
                  <td className="py-4 px-6">{accNum}</td>
                  
                  <td className="py-4 px-6">
                    {acc.isExpanded || !acc.children
                      ? acc.current
                      : acc.children_total_current}
                  </td>
                  <td className="py-4 px-6">
                    {acc.isExpanded || !acc.children
                      ? acc.previous
                      : acc.children_total_previous}
                  </td>
                </tr>
                {acc.children &&
                  acc.isExpanded &&
                  Object.keys(acc.children).map((childId) => {
                    const childAcc = acc.children[childId];
                    return (
                      <React.Fragment key={childId}>
                        <tr key={childId} className={tableSubRow}>
                          <td
                            className={`py-4 px-6 flex items-center gap-2 ${iconButton}`}
                            onClick={() => changeExpanded(childAcc)}
                          >
                            {childAcc.children ? (
                              childAcc.isExpanded ? (
                                <AiFillMinusCircle />
                              ) : (
                                <BsPlusCircleFill />
                              )
                            ) : null}
                            <span className="font-medium">
                              {childAcc.account_name}
                            </span>
                          </td>
                          <td className="py-4 px-6">{childId}</td>
                          <td className="py-4 px-6">
                            {childAcc.isExpanded || !childAcc.children
                              ? childAcc.current
                              : childAcc.children_total_current}
                          </td>
                          <td className="py-4 px-6">
                            {childAcc.isExpanded || !childAcc.children
                              ? childAcc.previous
                              : childAcc.children_total_previous}
                          </td>
                        </tr>
                        {childAcc.children &&
                          childAcc.isExpanded &&
                          Object.keys(childAcc.children).map((grandChildId) => {
                            const grandChildAcc =
                              childAcc.children[grandChildId];
                            return (
                              <React.Fragment key={grandChildId}>
                                <tr
                                  key={grandChildId}
                                  className={tableSubSubRow}
                                >
                                  <td
                                    className={`py-4 px-6 flex items-center gap-2 ${iconButton}`}
                                    onClick={() =>
                                      changeExpanded(grandChildAcc)
                                    }
                                  >
                                    {grandChildAcc.children ? (
                                      grandChildAcc.isExpanded ? (
                                        <AiFillMinusCircle />
                                      ) : (
                                        <BsPlusCircleFill />
                                      )
                                    ) : null}
                                    <span className="font-medium">
                                      {grandChildAcc.account_name}
                                    </span>
                                  </td>
                                  
                                  <td className="py-4 px-6">{grandChildId}</td>
                                  <td className="py-4 px-6">
                                    {grandChildAcc.isExpanded ||
                                    !grandChildAcc.children
                                      ? grandChildAcc.current
                                      : grandChildAcc.children_total_current}
                                  </td>
                                  <td className="py-4 px-6">
                                    {grandChildAcc.isExpanded ||
                                    !grandChildAcc.children
                                      ? grandChildAcc.previous
                                      : grandChildAcc.children_total_previous}
                                  </td>
                                </tr>
                                {grandChildAcc.children &&
                                  grandChildAcc.isExpanded &&
                                  Object.keys(grandChildAcc.children).map(
                                    (greatGrandChildId) => {
                                      const greatGrandChildAcc =
                                        grandChildAcc.children[
                                          greatGrandChildId
                                        ];
                                      return (
                                        <tr
                                          key={greatGrandChildId}
                                          className={tableSubSubSubRow}
                                        >
                                          <td
                                            className={`py-4 px-6 flex items-center gap-2 ${iconButton}`}
                                            onClick={() =>
                                              changeExpanded(greatGrandChildAcc)
                                            }
                                          >
                                            {greatGrandChildAcc.children ? (
                                              greatGrandChildAcc.isExpanded ? (
                                                <AiFillMinusCircle />
                                              ) : (
                                                <BsPlusCircleFill />
                                              )
                                            ) : null}
                                            <span className="font-medium ">
                                              {greatGrandChildAcc.account_name}
                                            </span>
                                          </td>
                                          <td className="py-4 px-6">
                                            {greatGrandChildId}
                                          </td>
                                          <td className="py-4 px-6">
                                            {greatGrandChildAcc.isExpanded ||
                                            !greatGrandChildAcc.children
                                              ? greatGrandChildAcc.current
                                              : greatGrandChildAcc.children_total_current}
                                          </td>
                                          <td className="py-4 px-6">
                                            {greatGrandChildAcc.isExpanded ||
                                            !greatGrandChildAcc.children
                                              ? greatGrandChildAcc.previous
                                              : greatGrandChildAcc.children_total_previous}
                                          </td>
                                        </tr>
                                      );
                                    }
                                  )}
                              </React.Fragment>
                            );
                          })}
                      </React.Fragment>
                    );
                  })}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
