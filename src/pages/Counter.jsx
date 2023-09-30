import { useSelector } from "react-redux"

export default function Counter() {

    const counter = useSelector(state => state.counter)

  return (
    <div>
        <h1>Counter : {counter.value}</h1>
    </div>
  )
}