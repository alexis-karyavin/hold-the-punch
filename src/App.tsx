import { useState } from "react"
import user1 from "/images/1.png"
import user2 from "/images/2.png"
import user3 from "/images/3.png"
import user4 from "/images/4.png"

import "./App.css"

import SelectUser from "./components/SelectUser/SelectUser"
import Punch from "./components/Punch/Punch"
import Counter from "./components/Counter/Counter"

function App() {
  const [currUserIndex, setCurrUserIndex] = useState(-1)
  const [count, setCount] = useState(0)
  const users = [user1, user2, user3, user4]
  const clickBtnBack = () => {
    setCurrUserIndex(-1)
    setCount(0)
  }

  const content =
    currUserIndex === -1 ? (
      <SelectUser
        users={users}
        clickUser={(index) => setCurrUserIndex(index)}
      />
    ) : (
      <Punch
        user={users[currUserIndex]}
        backToUsers={clickBtnBack}
        punch={() => setCount((count) => count + 1)}
      />
    )

  return (
    <div className="from-slate-800 to-slate-900 bg-gradient-to-b w-full h-full p-3 flex flex-col">
      <h1 className="text-5xl font-bold text-center mt-10">
        {currUserIndex !== -1 ? (
          <Counter value={count} />
        ) : (
          "Кого ты сегодня хочешь избить??"
        )}
      </h1>
      {content}
    </div>
  )
}

export default App
