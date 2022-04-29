import React, { useEffect, useState } from "react";

import "./Paginate.css";

const Paginate = (props) => {
  const [page, setPage] = useState(props.page);

  const minPage = 1;
  const maxPage = Math.ceil(props.items / props.itemsPerPage);

  const start = (page - 1) * props.itemsPerPage + 1;
  const stop = Math.min(start + props.itemsPerPage - 1, props.items);
  const leftSide = Math.max(page - 2, minPage);
  const rightSide = Math.min(page + 2, maxPage);

 useEffect(() => props.setData({start, stop}), [])
  const onClickHandler = (next_or_prev) => {
    if(next_or_prev === "next"){
      setPage((prev) => Math.min(prev + 1, maxPage))
    }
    else if(next_or_prev === "prev"){
      setPage((prev) => Math.max(prev - 1, minPage))
    }
    props.setData({start, stop})
  }
  console.log(start, stop);
  return (
    <div className="flex-container">
      <div className="paginate-ctn">
        <div  className="round-effect" onClick={() => onClickHandler("prev") }>
          &lsaquo;
        </div>
        
          {[...Array(rightSide + 1 - leftSide).keys()].map((num) => (
            <div
              key={num}
              onClick={() => setPage(num + leftSide)}
              className={`round-effect ${page === num + leftSide ? "active": ""}`}
            >
              {num + leftSide}
            </div>
          ))}
        <div className="round-effect" onClick={() => onClickHandler("next")}>
        &rsaquo;
        </div>
      </div>
    </div>
  );
};

Paginate.defaultProps = {
  page: 1,
  itemsPerPage: 10,
  items: 100,
};

export default Paginate;
