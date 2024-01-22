import './MyStack.scss';
import Board from "./Board";

export default function MyStack() {
    return (
        <div className="stackContainer">
            <div className="blockTitle">My stack</div>
            <Board/>
        </div>
    )
}