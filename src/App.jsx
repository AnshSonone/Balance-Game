import React from "react"
import Game from "./component/Game"

function App() {

  return (
    <div className="text-center">
      <h1 className="p-6 text-[5vw] sm:text-[4vw] md:text-4xl w-full">King of Diamond: Balance Game</h1>
      <Game />
    </div>
  )
}

export default App

// bg-[url(/public/background.png)] bg-no-repeat bg-cover bg-center 
