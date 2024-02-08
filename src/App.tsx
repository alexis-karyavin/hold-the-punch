import { useState } from "react"
import users from "./constants/users"

import "./App.css"

import SelectUser from "./components/SelectUser/SelectUser"
import Punch from "./components/Punch/Punch"
import Counter from "./components/Counter/Counter"
import clsx from "clsx"

function App() {
  const [currUserIndex, setCurrUserIndex] = useState(-1)
  const [count, setCount] = useState(0)
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
        count={count}
        punch={() => setCount((count) => count + 1)}
      />
    )

  return (
    <div className="from-slate-800 to-slate-900 bg-gradient-to-b w-full h-full p-3 flex flex-col">
      <h1
        className={clsx(
          {
            "text-5xl mt-10": currUserIndex !== -1,
            "text-lg": currUserIndex === -1,
          },
          " font-bold text-center",
        )}
      >
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
