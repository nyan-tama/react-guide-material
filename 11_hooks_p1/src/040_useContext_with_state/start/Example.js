import { createContext, useState } from "react";
import Child from "./components/Child";
import OtherChild from "./components/OtherChild";
export const MyContext = createContext();

const Example = () => {
  const [state, setState] = useState(0);

  return (
    // Providerで囲むことで、子コンポーネントに値を渡すことができる
    <MyContext.Provider value={[state, setState]}>
      <Child />
      <OtherChild />
    </MyContext.Provider>
  );
};

export default Example;
