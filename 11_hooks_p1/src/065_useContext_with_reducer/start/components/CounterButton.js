import { useDispatchCounter } from '../context/CounterContext';

const CounterButton = ({ calcType, step }) => {
    const dispatch = useDispatchCounter();
    const clickHandler = () => {
        dispatch({ type: calcType, step });
    }
    return <button onClick={clickHandler}>{calcType}{step}</button>
}
export default CounterButton;