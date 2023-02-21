import Child from "./components/Child";
import { createContext } from "react"

// propsを渡さずに子コンポーネントに値を渡す方法
export const MyContext = createContext("hello");

const Example = () => {
  return <Child />;
};

export default Example;
