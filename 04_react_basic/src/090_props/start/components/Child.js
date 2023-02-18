/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

const Child = ({ color: a = 'green', num, fn, bool, obj }) => {
  // console.log(a);
  return (
    <div className={`component ${a}`}>
      <h3>Hello Component</h3>
      <h3>{num}</h3>
      <h3>{fn("Props")}</h3>
      <h3>{bool ? "True" : "False"}</h3>
      <h3>{obj.name + obj.age}</h3>
    </div>
  );
};

export default Child;
