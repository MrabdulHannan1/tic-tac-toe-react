import React, { useState } from "react";

const Square = ({ num, onsquareClick }) => {
  return (
    <>
      <button className="square" onClick={onsquareClick}>
        {num}
      </button>
    </>
  );
};

export default Square;
