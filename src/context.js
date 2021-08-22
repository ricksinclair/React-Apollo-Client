import { createContext } from "react";

export const linkContext = createContext([
  { link: "http://yahoo.com", slug: "8o3yiwh" },
  { link: "http://google.com", slug: "8wldnsda" },
  { link: "http://bing.com", slug: "oiaasdkj" }
]);

export default linkContext;
