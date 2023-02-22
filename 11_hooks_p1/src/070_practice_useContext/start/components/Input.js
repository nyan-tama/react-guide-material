import { useCalc, useCalcDispatch } from '../context/CalcContext';

//props: nameを受け取る
const Input = ({ name }) => {
    // カスタムフックを使って、stateとdispatchを取得
    const state = useCalc();
    const dispatch = useCalcDispatch();

    // dataはなくもいいが、アクションとデータを分けておくとわかりやすいので分けておく
    const numChangeHandler = (e) => {
        dispatch({ operator: 'change', data: { name: e.target.name, value: e.target.value } });
    };


    // name動的に変わるので、[]で囲む
    return (
        <div>
            {name}:
            <input type="number"
                name={name}
                value={state[name]}
                onChange={numChangeHandler} />
        </div>
    )
}

export default Input;