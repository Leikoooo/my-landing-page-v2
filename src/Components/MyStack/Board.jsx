import './MyStack.scss';
import Cell from "./Cell";

const GRID_SIZE = 4
const CELL_SIZE = 20
const CELL_GAP = 2
export default function Board() {
    const cells = []
    for (let i =0; i < 27; i++ ){
        cells.push(<Cell/>)
    }

    return (
        <div className="board">
            {cells}
        </div>
    )
}
