import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

//コンポーネントからの分離
//typeで処理を分岐
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "change":
      //payload.nameでstateのkeyを指定
      //payload.valueでstateのvalueを指定
      //[]はstatgeのkeyを指定するため1つの変数にする
      return { ...state, [payload.name]: payload.value }
    case "add":
      // 前回値を上書き 
      return { ...state, result: state.a + state.b }
    case "minus":
      return { ...state, result: state.a - state.b }
    case "divide":
      return { ...state, result: state.a / state.b }
    case "multiply":
      return { ...state, result: state.a * state.b }
    default:
      throw new Error("Invalid action type");
  }
}

const Example = () => {
  //初期値
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  //reducerと初期値を渡す
  const [state, dispatch] = useReducer(reducer, initState);

  //state.typeを渡す
  const calculate = (e) => {
    dispatch({ type: e.target.value })
  };
  const numChangeHandler = (e) => {
    //dispatchでreducerにtypeとpayloadを渡す
    dispatch({ type: "change", payload: { name: e.target.name, value: parseInt(e.target.value) } })
  }

  return (
    <>
      <div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={numChangeHandler}
        />
      </div>

      <div>
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={numChangeHandler}
        />
      </div>

      <select value={state.type} onChange={calculate}>
        {CALC_OPTIONS.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          )
        })}
      </select>

      <h1>結果：{state.result}</h1>
    </>
  );
};

export default Example;
