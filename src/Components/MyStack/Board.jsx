import './MyStack.scss';

export default function Board() {

    return (
        <div className="board">
            <span className="cell">
                <img className='image' src={'images/Node.svg'} alt="Node"/>
            </span>
            <span className="cell">
                <img className='image' src={'images/Sqlite.svg'} alt="Sqlite"/>
            </span>
            <span className="cell">
                <img className='image' src={'images/Go.svg'} alt="Go"/>
            </span>
            <span className="cell">
                <img className='image' src={'images/Ts.svg'} alt="Vue"/>
            </span>
            <span className="cell">
                <img className='image' src={'images/Mysql.svg'} alt="Mysql"/>
            </span>
            <span className="cell">
                <img className='image' src={'images/Next.svg'} alt="Next"/>
            </span>
            <span className="cell">
                <img className='image' src={'images/Docker.svg'} alt="Docker"/>
            </span>
            <span className="cell">
                <img className='image' src={'images/Oracle.svg'} alt="Oracle"/>
            </span>
            <span className="cell">
                <img className='image' src={'images/Python.svg'} alt="Python"/>
            </span>

        </div>
    )
}
