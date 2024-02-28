
import './App.css';
import FirstScreen from './Components/FirstScreen/FirstScreen';

import Socials from './Components/Socials/Socials';
import PageContent from './Components/PageContent/PageContent';
import Separator from './Components/Separator/Separator';
import MyStack from './Components/MyStack/MyStack'
import AboutMe from './Components/AboutMe/AboutMe'


function App() {
  let title1 = () => {
    return (
      <div className="pageTitle">Code it, test it, ship it.</div>
      )
  };

  let title2 = () => {
    return (
        <div className="pageTitle">
        <span className={'title2'}>Build your </span>
        <span>dream with code.</span>
        </div>
      )
  };

  let title3 = () => {
    return (

      <div  className="pageTitle">
        <span>Work with me</span>
        <img style={{marginLeft: 10, marginRight: 10, width: 20}} src="images/GithubDot.svg" alt="GithubDot"/>
        <img style={{marginRight: 10, width: 20}} src="images/TgDot.svg" alt="TgDot"/>
        <img style={{marginRight: 10, width: 20}} src="images/InstDot.svg" alt="InstDot"/>
        <span style={{fontSize: 20, fontFamily: 'Gilroy-bold', fontWeight: 300}}>solomon.www@mail.ru</span>
      </div>
      )
  };

  return (
    <div className="App">
        <FirstScreen/>
        <div className="gradient"></div>
        <PageContent PageTitle={title1} Component={MyStack}/>
        <PageContent PageTitle={title2} Component={AboutMe}/>
        <PageContent PageTitle={title3} Component={AboutMe}/>
        <Socials/>
    </div>
  );
}

export default App;
