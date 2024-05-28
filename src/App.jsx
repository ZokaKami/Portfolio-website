import Loadingscreen from "/components/loadingScreen.tsx"
import { useState } from "react";
import Header from "/components/header.tsx"
 
function App() {
  const [progress, setProgress] = useState(0);

  return (
    <div className="font-alegreya  " >
      {progress < 130 ? (
        <Loadingscreen progress={progress} setProgress={setProgress}/>
      ) : (
        <Header progress={progress}/>
      )}
      
    </div>
  )
}

export default App
