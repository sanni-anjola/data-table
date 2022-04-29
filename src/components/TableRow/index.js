import React from "react";

const TableRow = ({ data, type }) => {
  console.log("Table row", data);
  const arr = Object.keys(data);
  return (
    
    <tr>
      {arr.map((dataKey, index) =>
        type === "th" ? (
          <th key={`dataKey-${index}`}>{dataKey}</th>
        ) : (
          <td key={data[dataKey]}>{data[dataKey]}</td>
        )
      )}
    </tr>
        
  );
};

TableRow.defaultProps = {
  type: "td",
};
export default TableRow;
