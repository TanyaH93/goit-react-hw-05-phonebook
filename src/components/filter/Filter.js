import React from "react";

const Filter = ({ getName }) => (
  <>
    <p>Find contact by name</p>
    <input type="text" onChange={getName} />
  </>
);

export default Filter;
