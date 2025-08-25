import React from "react";

const Fragment = ({ propFragment }) => {
  return (
    <>
      <h2>Primeiro titulo</h2>
      <h3>Segundo titulo</h3>
      <h4>{propFragment}</h4>
    </>
  );
};

export default Fragment;
