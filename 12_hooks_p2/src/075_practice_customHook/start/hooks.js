import { useState } from "react"

const useCount = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1)
    }
    return {
        count,
        increment
    }
}

export default useCount;
