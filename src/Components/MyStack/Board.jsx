import './MyStack.scss';
import Star from "./Star";


export default function Board() {
    let mas = [
        <div className="cell">
            <img className='image' src={'images/Python.svg'} alt="Python"/>
            <div className="stackDescription">
                <p>Python</p>
                <div className="stars">
                    <Star className='star' fill={true} color={"#F6D565"}/>
                    <Star className='star' fill={true} color={"#F6D565"}/>
                    <Star className='star' fill={true} color={"#F6D565"}/>
                    <Star className='star' fill={true} color={"#F6D565"}/>
                    <Star className='star' fill={true} color={"#F6D565"}/>
                </div>
            </div>
        </div>,
        <div className="cell">
            <img className='image' src={'images/Go.svg'} alt="Go"/>
            <div className="stackDescription">
                <p>Golang</p>
                <div className="stars">
                    <Star className='star' fill={true} color={"#1BAAED"}/>
                    <Star className='star' fill={true} color={"#1BAAED"}/>
                    <Star className='star' fill={true} color={"#1BAAED"}/>
                    <Star className='star' fill={true} color={"#1BAAED"}/>
                    <Star className='star' fill={false} color={"#1BAAED"}/>
                </div>
            </div>
        </div>,
        <div className="cell">
            <img className='image' src={'images/Node.svg'} alt="Node"/>
            <div className="stackDescription">
                <p>NodeJS</p>
                <div className="stars">
                    <Star className='star' fill={true} color={"#35BF69"}/>
                    <Star className='star' fill={true} color={"#35BF69"}/>
                    <Star className='star' fill={true} color={"#35BF69"}/>
                    <Star className='star' fill={true} color={"#35BF69"}/>
                    <Star className='star' fill={false} color={"#35BF69"}/>
                </div>
            </div>
        </div>,
        <div className="cell">
            <img className='image' src={'images/Cpp.svg'} alt="Cpp"/>
            <div className="stackDescription">
                <p>C++</p>
                <div className="stars">
                    <Star className='star' fill={true} color={"#657FDA"}/>
                    <Star className='star' fill={true} color={"#657FDA"}/>
                    <Star className='star' fill={true} color={"#657FDA"}/>
                    <Star className='star' fill={false} color={"#657FDA"}/>
                    <Star className='star' fill={false} color={"#657FDA"}/>
                </div>
            </div>
        </div>,
        <div className="cell">
            <img className='image' src={'images/Js.svg'} alt="Js"/>
            <div className="stackDescription">
                <p>JavaScript</p>
                <div className="stars">
                    <Star className='star' fill={true} color={"#DBC928"}/>
                    <Star className='star' fill={true} color={"#DBC928"}/>
                    <Star className='star' fill={true} color={"#DBC928"}/>
                    <Star className='star' fill={true} color={"#DBC928"}/>
                    <Star className='star' fill={false} color={"#DBC928"}/>
                </div>
            </div>
        </div>,
        <div className="cell">
            <img className='image' src={'images/React.svg'} alt="React"/>
            <div className="stackDescription">
                <p>React</p>
                <div className="stars">
                    <Star className='star' fill={true} color={"#22C2F3"}/>
                    <Star className='star' fill={true} color={"#22C2F3"}/>
                    <Star className='star' fill={true} color={"#22C2F3"}/>
                    <Star className='star' fill={false} color={"#22C2F3"}/>
                    <Star className='star' fill={false} color={"#22C2F3"}/>
                </div>
            </div>
        </div>,
        <div className="cell">
            <img className='image' src={'images/Ts.svg'} alt="Ts"/>
            <div className="stackDescription">
                <p>TypeScript</p>
                <div className="stars">
                    <Star className='star' fill={true} color={"#3579C6"}/>
                    <Star className='star' fill={true} color={"#3579C6"}/>
                    <Star className='star' fill={true} color={"#3579C6"}/>
                    <Star className='star' fill={false} color={"#3579C6"}/>
                    <Star className='star' fill={false} color={"#3579C6"}/>
                </div>
            </div>
        </div>,
        <div className="cell">
            <img className='image' src={'images/Vue.svg'} alt="Vue"/>
            <div className="stackDescription">
                <p>Vue</p>
                <div className="stars">
                    <Star className='star' fill={true} color={"#11BF62"}/>
                    <Star className='star' fill={true} color={"#11BF62"}/>
                    <Star className='star' fill={false} color={"#11BF62"}/>
                    <Star className='star' fill={false} color={"#11BF62"}/>
                    <Star className='star' fill={false} color={"#11BF62"}/>
                </div>
            </div>
        </div>,
        <div className="cell">
            <img className='image' src={'images/Pgsql.svg'} alt="Pgsql"/>
            <div className="stackDescription">
                <p>Pgsql</p>
                <div className="stars">
                    <Star className='star' fill={true} color={"#375F93"}/>
                    <Star className='star' fill={true} color={"#375F93"}/>
                    <Star className='star' fill={true} color={"#375F93"}/>
                    <Star className='star' fill={true} color={"#375F93"}/>
                    <Star className='star' fill={true} color={"#375F93"}/>
                </div>
            </div>
        </div>,

        <div className="cell">
            <img className='image' src={'images/Sqlite.svg'} alt="Sqlite"/>
            <div className="stackDescription">
                <p>Sqlite</p>
                <div className="stars">
                    <Star className='star' fill={true} color={"#CEDAE1"}/>
                    <Star className='star' fill={true} color={"#CEDAE1"}/>
                    <Star className='star' fill={true} color={"#CEDAE1"}/>
                    <Star className='star' fill={true} color={"#CEDAE1"}/>
                    <Star className='star' fill={false} color={"#CEDAE1"}/>
                </div>
            </div>
        </div>,
        <div className="cell">
            <img className='image' src={'images/Oracle.svg'} alt="Oracle"/>
            <div className="stackDescription">
                <p>Oracle</p>
                <div className="stars">
                    <Star className='star' fill={true} color={"#E24B45"}/>
                    <Star className='star' fill={true} color={"#E24B45"}/>
                    <Star className='star' fill={true} color={"#E24B45"}/>
                    <Star className='star' fill={true} color={"#E24B45"}/>
                    <Star className='star' fill={false} color={"#E24B45"}/>
                </div>
            </div>
        </div>,
        <div className="cell">
            <img className='image' src={'images/Mysql.svg'} alt="Mysql"/>
            <div className="stackDescription">
                <p>MySQL</p>
                <div className="stars">
                    <Star className='star' fill={true} color={"#ED771C"}/>
                    <Star className='star' fill={true} color={"#ED771C"}/>
                    <Star className='star' fill={true} color={"#ED771C"}/>
                    <Star className='star' fill={false} color={"#ED771C"}/>
                    <Star className='star' fill={false} color={"#ED771C"}/>
                </div>
            </div>
        </div>,
        <div className="cell">
            <img className='image' src={'images/Cs.svg'} alt="Cs"/>
            <div className="stackDescription">
                <p>C#</p>
                <div className="stars">
                    <Star className='star' fill={true} color={"#65DA8D"}/>
                    <Star className='star' fill={true} color={"#65DA8D"}/>
                    <Star className='star' fill={true} color={"#65DA8D"}/>
                    <Star className='star' fill={false} color={"#65DA8D"}/>
                    <Star className='star' fill={false} color={"#65DA8D"}/>
                </div>
            </div>
        </div>,
        <div className="cell">
            <img className='image' src={'images/Next.svg'} alt="Next"/>
            <div className="stackDescription">
                <p>Next</p>
                <div className="stars">
                    <Star className='star' fill={true} color={"#FFFFFF"}/>
                    <Star className='star' fill={true} color={"#FFFFFF"}/>
                    <Star className='star' fill={false} color={"#FFFFFF"}/>
                    <Star className='star' fill={false} color={"#FFFFFF"}/>
                    <Star className='star' fill={false} color={"#FFFFFF"}/>
                </div>
            </div>
        </div>,

        <div className="cell">
            <img className='image' src={'images/Docker.svg'} alt="Docker"/>
            <div className="stackDescription">
                <p>Docker</p>
                <div className="stars">
                    <Star className='star' fill={true} color={"#4677B1"}/>
                    <Star className='star' fill={true} color={"#4677B1"}/>
                    <Star className='star' fill={true} color={"#4677B1"}/>
                    <Star className='star' fill={false} color={"#4677B1"}/>
                    <Star className='star' fill={false} color={"#4677B1"}/>
                </div>
            </div>
        </div>
    ]


    return (<div className="board">
        {mas.map((item) => item)}
    </div>)
}
