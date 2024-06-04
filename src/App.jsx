import Loadingscreen from "/components/loadingScreen.tsx"
import { useState } from "react";
import Header from "/components/header.tsx"
import BioNav from "/components/bioNav.tsx"
 
function App() {
  const [progress, setProgress] = useState(0);

  return (
    <div className="font-alegreya  " >
      {progress < 130 ? (
        <Loadingscreen progress={progress} setProgress={setProgress}/>
      ) : (
        <div>
         
        <Header progress={progress} className="z-[10]"/>
        <BioNav className="fixed z-[999]"/>
        </div>
      )}
      
    </div>
  )
}

export default App
