import { useDispatch } from "react-redux";

// import { useCounterDispatch } from "../context/CounterContext";

const CounterButton = ({ calcType, step }) => {

    //useDispatchでdispatchを取得
    const dispatch = useDispatch();
    // const dispatch = useCounterDispatch();

    const clickHandler = () => {
        //reducerにactionを渡す
        dispatch({ type: calcType, step });
    }

    return <button onClick={clickHandler}>{calcType}{step}</button>
}
export default CounterButton;