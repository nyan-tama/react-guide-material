// import { useCounter } from "../context/CounterContext";
import { useSelector } from "react-redux";

const CounterResult = () => {
  //useSelectorでstateを取得
  const state = useSelector(state => state.counter)
  //新しいstateでコンポーネントを再レンダリング
  return <h3>{state}</h3>;
};

export default CounterResult;