import LinkList from "./components/link/linklist";
import { linkContext } from "./context";
export default function App() {
  //I didn't get a response for my gql issue, so I'm using context to display dynamic data
  return (
    <div className="App">
      <linkContext.Provider
        value={[
          { link: "http://yahoo.com", slug: "8o3yiwh" },
          { link: "http://google.com", slug: "8wldnsda" },
          { link: "http://bing.com", slug: "oiaasdkj" }
        ]}
      >
        <LinkList />
      </linkContext.Provider>
    </div>
  );
}
