import "./App.css";
//import { setLocalStItem } from './components/localStWrappers';
import {
  getSessionStItem,
  setSessionStItem,
  Preferences,
} from "./components/sessionStInterfaces";
import { ChangeLanguage } from "./components/changeLanguage";

function App() {
  //setLocalStItem('name', 'copernicus');
  // alternatively, without the type wrappers:
  localStorage.setItem("name", "copernicus");
  // remains even if the setItem above
  // is removed, since localStorage is persistent
  const name = localStorage.getItem("name");
  localStorage.removeItem("name");

  // sessionStorage also persistent,
  // but ends if close browser
  sessionStorage.setItem("realname", "christina");
  const realname = sessionStorage.getItem("realname");
  sessionStorage.removeItem("realname");

  // structured data via interfaces
  setSessionStItem<Preferences>("pref", {
    lang: "english",
  });
  const pref = getSessionStItem<Preferences>("pref");
  sessionStorage.removeItem("pref");

  const langOpts = ["english", "chinese", "spanish", "japanese", "cryptic"];

  return (
    <div className="App">
      <header className="App-header">
        <p>name (localStorage): {name} </p>
        <p>realname (sessionStorage): {realname} </p>
        <p>lang (sessionStorage): {String(pref?.lang)} </p>
        {langOpts.map((opt, idx) => (
          <ChangeLanguage
            lang={opt}
            handleClick={() => {
              setSessionStItem<Preferences>("pref", { lang: opt });
            }}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
