import { useState } from 'react';

const Example = () => {
  const orderObj = { item: 'apple', count: 10 };
  const [_order, setOrder] = useState(orderObj);
  const changeItem = (e) => {
    setOrder(_order => (
      { ..._order, item: e.target.value }
    ))
    console.log(_order.item)
  };
  const countUp = () => {
    setOrder(_order => (
      { ..._order, count: _order.count + 1 }
    ))
    console.log(_order.count)
  };
  const countDown = () => {
    setOrder({ ..._order, count: _order.count - 1 })
    console.log(_order.count)
  };
  return (
    <div>
      <h3>練習問題</h3>
      <p>
        記述を変更し、完成コードのように「+と-ボタンをクリックするとCountの表示が1ずつ増減する機能」と「input要素に連動してItemの表示が変更される機能」を実装してください。コンポーネントの外側（上部）に変数や関数を準備しているためうまく使ってください。
      </p>
      <h3>Item:{_order.item}</h3>
      <h3>Count:{_order.count}</h3>
      <input type="text" value={_order.item} onChange={changeItem} />
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div>
  );
};

export default Example;
