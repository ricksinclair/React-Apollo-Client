import React, { useContext } from "react";
import linkContext from "../../context";
import Link from "./link";

const LinkList = (props) => {
  const links = useContext(linkContext);

  return (
    <>
      <ul>
        {links.map((link, idx) => (
          <li key={idx} className="py-2 mx-auto px-4 w-80">
            <Link link={link.link} slug={link.slug} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default LinkList;
