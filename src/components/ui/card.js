import React from "react";

const Card = (props) => {
  return (
    <div
      className={`bg-white  shadow overflow-hidden  hover:bg-gray-50  flex justify-around ${props.className}`}
    >
      {props.children}
    </div>
  );
};
export default Card;
