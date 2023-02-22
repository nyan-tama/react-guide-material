import { useContext, createContext, useReducer } from 'react'

const CalcContext = createContext();
const CalcDispatchContext = createContext();

//stateを取得するためのカスタムフック
const useCalc = () => {
    return useContext(CalcContext);
}
//dispatchを取得するためのカスタムフック
const useCalcDispatch = () => {
    return useContext(CalcDispatchContext);
}

const reducer = (state, { operator, data }) => {
    switch (operator) {
        case "change": {
            const { name, value } = data;
            return { ...state, [name]: value };
        }
        case "add": {
            return { ...state, result: parseInt(state.a) + parseInt(state.b) };
        }
        case "minus": {
            return { ...state, result: state.a - state.b };
        }
        case "divide": {
            return { ...state, result: state.a / state.b };
        }
        case "multiply": {
            return { ...state, result: state.a * state.b };
        }
        default:
            throw new Error("operator is invalid");
    }
};

const CalcProvider = ({ children }) => {
    // 初期ステート
    const initState = {
        a: 1,
        b: 2,
        result: 3,
        operator: "divide",
    };
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <CalcContext.Provider value={state}>
            <CalcDispatchContext.Provider value={dispatch}>
                {children}
            </CalcDispatchContext.Provider>
        </CalcContext.Provider>
    );
}

export { CalcContext, CalcProvider, CalcDispatchContext, useCalc, useCalcDispatch };