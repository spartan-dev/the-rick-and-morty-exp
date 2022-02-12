import React from "react";

const Title = ({ title, name }) => {
  return (
    <React.Fragment>
      <h1>
        {title} {name}
      </h1>{" "}
    </React.Fragment>
  );
};
export default Title;
