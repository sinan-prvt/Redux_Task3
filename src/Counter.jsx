import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./Action"

const Counter = () => {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()

    return(
        <>
            <h3>Count: {count}</h3>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </>
    )
}

export default Counter