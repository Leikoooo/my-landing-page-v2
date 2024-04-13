import './MyStack.scss';
import Board from "./Board";

export default function MyStack() {
    return (
        <div className="stackContainer">
            <div className="blockTitle">
                <span>My Stack</span>
                <img src="images/MyStackPic.svg" alt="stack"/>
            </div>
            <Board/>
            <span className={'caption'}>* Звезды показывают мою уверенность во владении технологией</span>
        </div>
    )
}