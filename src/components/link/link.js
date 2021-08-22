import React from "react";
import Card from "../ui/card";

const Link = (props) => {
  return (
    <Card>
      <h1 className="block">{props.link}</h1>
      <h2 className="block">{props.slug}</h2>
    </Card>
  );
};
export default Link;
