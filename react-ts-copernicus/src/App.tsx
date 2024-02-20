
import './App.css';
import { Copernicus } from './components/Copernicus';
import { CrewmanList } from './components/CrewmanList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Banana } from './components/Banana';

function App() {
  const crewmanList = [
    {
      alias: 'The Dark Knight of Mars',
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

      <Status status='loading'/>
      <Heading>
        <Copernicus name='˚　　　　✦　🪐　　.　　. 　 ˚　.　　　　 🌀　 . ✦　　　 　˚　　　　 .
　🚀　　.   　　˚　　 　　*　　 　　✦　　　.　　.　　　✦　˚ 　☄️ 　　　 ˚🌒　.˚　　　　✦　　　.　　. 　 ˚　.　　　　 　　 　🌀　　　 ✦　　.　
' upcomingLaunchDate={new Date()}
isCopernicus={false}/>
      </Heading>

      <CrewmanList names={crewmanList}/>

      <Banana handleClick={() => {
        console.log('banana got')
      }}
      />
    </div>
  );
}

export default App;
