import './App.css';
import FirstScreen from './Components/FirstScreen/FirstScreen';
import Footer from './Components/Footer/Footer';
import Socials from './Components/Socials/Socials';
import PageContent from './Components/PageContent/PageContent';
import Separator from './Components/Separator/Separator';
import MyStack from './Components/MyStack/MyStack'


function App() {
  return (
    <div className="App">
        <FirstScreen/>
        <Separator TextLine={"WEB DEVELOPERㅤ"}/>
        <PageContent PageTitle={'Code it, test it, ship it.'} Component={MyStack}/>
        <Footer/>
        <Socials/>
    </div>
  );
}

export default App;
