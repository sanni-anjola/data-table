import React from "react";
import TableRow from "../TableRow";

const Table = ({ tableItems }) => {
  console.log("Table", tableItems);
  return (
    <table>
      <caption>Data Table</caption>
      <thead>
        <TableRow type="th" data={tableItems[0]} />
      </thead>
      <tbody>
        {tableItems.map((item, index) => (
          <TableRow key={index} type="td" data={item} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
