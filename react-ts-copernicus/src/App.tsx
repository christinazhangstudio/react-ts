
import './App.css';
import { Copernicus } from './components/Copernicus';
import { CrewmanList } from './components/CrewmanList';

function App() {
  const crewmanList = [
    {
      alias: 'G.0.A.T.',
      real: 'Isaac Asimov',
    },
    {
      alias: 'Galactic(arl)',
      real: 'Carl Sagan',
    },
    {
      alias: 'Innocuous robot assistant',
      real: 'HAL 9000',
    }
  ]
  return (
    <div className='App'>
      <Copernicus name='˚　　　　✦　🪐　　.　　. 　 ˚　.　　　　 🌀　 . ✦　　　 　˚　　　　 .
　🚀　　.   　　˚　　 　　*　　 　　✦　　　.　　.　　　✦　˚ 　☄️ 　　　 ˚🌒　.˚　　　　✦　　　.　　. 　 ˚　.　　　　 　　 　🌀　　　 ✦　　.　
' upcomingLaunchDate={new Date()}
isCopernicus={false}/>
      <CrewmanList names={crewmanList}/>
    </div>
  );
}

export default App;
