import './FirstScreen.scss';
import Header from '../Header/Header';
// import Points from './Points';
import RLine from './RLine';
// import LLine from './LLine';
import Separator from '../Separator/Separator';
import LLine from "./LLine";


export default function FirstScreen() {
    return (
        <div className="firstScreen">
            <div className="firstScreenPC">
                <div className="bg"></div>
                <RLine/>
                <LLine/>

                <div className="wrapper">
                    <Header/>
                    <h1>
                        <span className={'title0'}>Разработчик из Санкт-Петербурга</span>
                        <span className={'title1'}>CREATE DIGITAL</span>
                        <div className="middle">
                            <img className={'frog'} src={'images/Frog.png'} alt="frog"/>
                            <span className={'title2'}>SOLUTION</span>
                        </div>
                        <span className={'title3'}>WITH ME</span>
                    </h1>
                </div>
                <Separator TextLine={"WEB DEVELOPER ㅤ"}/>
            </div>
        </div>
    )
}