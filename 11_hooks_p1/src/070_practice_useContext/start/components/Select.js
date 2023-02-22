import { useCalc, useCalcDispatch } from '../context/CalcContext';

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const Select = () => {
    const state = useCalc();
    const dispatch = useCalcDispatch();

    // イベントごとにdispatchを呼び出し、ステートをセットの上、reducerを呼び出す
    const calculate = (e) => {
        dispatch({ operator: e.target.value });
    };
    return (<select value={state.operator} name="operator" onChange={calculate}>
        {CALC_OPTIONS.map((option) => (
            <option key={option} value={option}>
                {option}
            </option>
        ))}
    </select>)
}

export default Select;