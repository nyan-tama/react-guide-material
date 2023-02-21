import { useState, useReducer } from "react"

const Example = () => {
  const [state, setState] = useState(0)

  //reducer useStateに書く処理をreducerに書く
  //第一引数はreducer関数、第二引数は初期値　
  //状態と更新をセットで管理するとわかりやすい
  const [rstate, dispatch] = useReducer((prev, { type, step }) => {
    if (type === "+") { return prev + step }
    else if
      (type === "-") { return prev - step }
  }, 0)


  const countUp = () => {
    setState(prev => ++prev)
  }
  const rcountUp = () => {
    dispatch({ type: "+", step: 2 });
  }
  const rcountDown = () => {
    dispatch({ type: "-", step: 4 })
  };

  return (
    <>
      <div>
        <h3>{rstate}</h3>
        <button onClick={rcountUp}>+</button>
      </div>
      <div>
        <h3>{rstate}</h3>
        <button onClick={rcountDown}>-</button>
      </div>
    </>
  );
};

export default Example;
