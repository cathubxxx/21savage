import logo from './assets/logo.png';
import meme from './assets/img.png';
import tg from './assets/tg.svg';
import sound from './assets/music/music.mp3';
import './App.css';
import Overlay from './components/Overlay';

function App() {

  const playAudio = () => {
    const audio = document.querySelector('.audio');
    if (audio) {
      audio.play();
    }
  };

  return (
    <div className="App">
      <Overlay playAudio={playAudio}/>
      <audio autoPlay className="audio" loop>
          <source src={sound} type="audio/mp3" />
          Your browser does not support the audio element.
      </audio>
      <div className="logoBlock">
        <img alt="savage" src={logo} />
      </div>
      <div className="headingBlock">
        <h2 className="heading">SAVAGE JOKER</h2>
        <div className="socialBlock">
          <a href="t.me/"><img alt="telegram" src={tg}/></a>
        </div>?
      </div>
      <div className="imgBlock">
        <img className="meme" alt="meme" src={meme}/>
      </div>
      <div className="buttonBlock">
        <button className="button">BUY $MARKED</button>
      </div>
    </div>
  );
}

export default App;
