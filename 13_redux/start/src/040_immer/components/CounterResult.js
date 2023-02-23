import { useSelector } from "react-redux"
const CounterResult = () => {
  const state = useSelector(state => state.counter.count);
  return <h3>{state.counter}</h3>;
};

export default CounterResult;