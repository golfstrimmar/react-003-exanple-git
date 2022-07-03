import React from "react";


const Loading = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: ".5rem" }}>
      <div className="lds-dual-ring"></div>
    </div>
  );
};


export default Loading;
