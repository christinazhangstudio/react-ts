//import { useState } from "react";

type ChangeLanguageProps = {
  lang: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

// really, useState is *probably* the better way of
// doing this versus cookies/storage,
// but for the sake of demo
// export const ChangeLanguage = () => {
//   const [lang, setLang] = useState("chinese");

//   const chinese = () => {
//     setLang("chinese");
//   };

//   // const english = () => {} etc.

//   return <button onClick={chinese}>Chinese</button>;
//   // <button onClick={english}> etc.
// };

export const ChangeLanguage = ({ lang, handleClick }: ChangeLanguageProps) => {
  return <button onClick={handleClick}>{lang}</button>;
};
