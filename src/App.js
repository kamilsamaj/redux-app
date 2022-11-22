import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {decrement, increment} from "./redux/actions/counterActions";

function App() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>Counter {counter}</h1>
            <button onClick={() => dispatch(increment(1))}>+1</button>
            <button onClick={() => dispatch(decrement(1))}>-1</button>
            <button onClick={() => dispatch(increment(5))}>+5</button>
            <button onClick={() => dispatch(decrement(5))}>-5</button>

            {isLogged ?
                <h3>This is available only for logged in people</h3> : ''}
        </div>
    );
}

export default App;
