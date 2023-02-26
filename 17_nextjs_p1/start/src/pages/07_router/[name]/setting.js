import { useRouter } from 'next/router'
export default function Setting({ query }) {
    const router = useRouter();
    // console.log(router.query);
    const clickHandler = () => {
        router.push('/', "dummy-url")
    }
    return (
        <>
            <h1>routerから取得：{router.query.name}</h1>
            <button onClick={clickHandler}>アクションによる画面遷移</button>
        </>

    )
}

//http://localhost.3000/07_router/hello/setting?key=value&key2=value2
export async function getServerSideProps({ query }) {
    // console.log(query)
    return {
        props: { query }
    }
}