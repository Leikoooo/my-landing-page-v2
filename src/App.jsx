import './App.css';
import FirstScreen from './Components/FirstScreen/FirstScreen';

import PageContent from './Components/PageContent/PageContent';
import MyStack from './Components/MyStack/MyStack'
import AboutMe from './Components/AboutMe/AboutMe'
import WorkWithMe from './Components/WorkWithMe/WorkWithMe'


function App() {
    let title1 = () => {
        return (
            <div className="pageTitle">
                <h2 className={'title1'}>Code it, test it, ship it.</h2>
            </div>
        )
    };

    let title2 = () => {
        return (
            <div className="pageTitle">
                <h2>
                    <span className={'BYDWC'}>Build your </span>
                    <span>dream with code.</span>
                </h2>
            </div>
        )
    };

    let title3 = () => {
        return (
            <div className="pageTitleWWM">
                <h2>Work with me</h2>
                <div className="links">
                    <a href="https://github.com/leikooo" target="_blank" rel="noreferrer">
                        <img style={{width: 20}} src="images/GithubDot.svg"
                             alt="GithubDot"/>
                    </a>
                    <a href="https://t.me/leikooo" target="_blank" rel="noreferrer">
                        <img style={{width: 20}} src="images/TgDot.svg" alt="TgDot"/>
                    </a>
                    <a href="https://instagram.com/leikoo.jpeg" target="_blank" rel="noreferrer">
                        <img style={{width: 20}} src="images/InstDot.svg" alt="InstDot"/>
                    </a>
                </div>
            </div>
        )
    };

    return (
        <div className="App">
            <FirstScreen/>
            <PageContent PageTitle={title1} Component={MyStack}/>
            <PageContent PageTitle={title2} Component={AboutMe}/>
            <PageContent PageTitle={title3} Component={WorkWithMe}/>
        </div>
    );
}

export default App;
