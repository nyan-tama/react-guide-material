import Child from "./components/Child";

const Example = () => {
    const hello = (arg) => `Hello ${arg}`
    const o = {
        color: "red",
        num: 123
    }
    return (
        <>
            <Child
                {...o}
                fn={hello}
                bool
                obj={{ name: "tom", age: "30" }} />
            {/* <Child color="red" /> */}
        </>
    )
}


export default Example;
