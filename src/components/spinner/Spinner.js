import React from "react";

import loading from "../../assets/loading.svg";

const style = {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  height: "100vh",
  width: "100vw",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "white"
};

const Spinner = () => {
  return (
    <div style={style}>
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Spinner;
