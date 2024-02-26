
import './App.css';
import { Copernicus } from './components/Copernicus';
import { CrewmanList } from './components/CrewmanList';
//import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Banana } from './components/Banana';
//import { Input } from './components/Input';
import { Container } from './components/Container';
import { Counter } from './components/state/Counter';
import { ThemeContextProvider } from "./components/context/ThemeContext"
import { ThemeRenderer } from "./components/context/ThemeRenderer"
import { UserContextProvider } from "./components/context/UserContext"
import { User } from "./components/context/User"

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
      <ThemeContextProvider>
        <ThemeRenderer>

        {/*<Status status='loading'/>*/}
        <Heading>
          <Copernicus name='˚　　　　✦　🪐　　.　　. 　 ˚　.　　　　 🌀　 . ✦　　　 　˚　　　　 .
　🚀　　.   　　˚　　 　　*　　 　　✦　　　.　　.　　　✦　˚ 　☄️ 　　　 ˚🌒　.˚　　　　✦　　　.　　. 　 ˚　.　　　　 　　 　🌀　　　 ✦　　.　
' upcomingLaunchDate={new Date()}
isCopernicus={false}/>
        </Heading>

       {/* context always created outside of component, but future value in actual component */}
        <UserContextProvider>
          <User />
        </UserContextProvider>  

        <CrewmanList names={crewmanList}/>

        <Banana handleClick={(event, id) => {
          console.log('banana got', event, id)
        }}
        />
        {/*<Input value='' handleChange={(event) => console.log(event)} />*/}

        {/* this is a CSS property, and gets typed as a React.CSSProperties */}
        <Container styles={{ border: '1px solid black', padding: '1rem' }}/>
    
        <Counter />
      
        </ThemeRenderer>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
