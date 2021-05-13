import './assets/css/App.css';
import DrumMachine from './components/drum-machine';
import Footer from './components/footer';
import Header from './components/header';



function App() {
  return (
    <div id="App">
      <Header/>
      <DrumMachine/>
      <div id="credits">By Sebastian Neumann</div>
      <Footer/>
    </div>
  );
}
export default App;
