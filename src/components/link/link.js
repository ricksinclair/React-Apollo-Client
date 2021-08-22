import React from "react";
import Card from "../ui/card";

const Link = (props) => {
  return (
    <Card>
      <svg
        className={`py-3`}
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      </svg>
      <h1 className="block">{props.link}</h1>
      <h2 className="block">{props.slug}</h2>
    </Card>
  );
};
export default Link;
