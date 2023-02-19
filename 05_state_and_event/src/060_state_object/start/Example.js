import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj)

  const changeName = (e) => {
    //オブジェクトのままわたす
    setPerson({ name: e.target.value, age: person.age })
  }
  const changeAge = (e) => {
    //スプレッド構文でオブジェクトを展開して、ageだけ上書きする
    //stateオブジェクトの中身を変更するのではなく、新しいオブジェクトを作成して、それをstateにセットする
    setPerson({ ...person, age: e.target.value })
  }
  const reset = () => {
    //オブジェクトのままわたす
    setPerson({ name: "", age: "" })
  }
  return (
    <>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <input type="text" value={person.name} onChange={changeName} />
      <input type="number" value={person.age} onChange={changeAge} />
      <div><button onClick={reset}>リセット</button></div>
    </>
  )
};

export default Example;
