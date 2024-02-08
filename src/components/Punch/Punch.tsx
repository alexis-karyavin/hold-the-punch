import WebApp from "@twa-dev/sdk"
import { IUser } from "../../interfaces"

interface Props {
  user: IUser
  count: number
  backToUsers: () => void
  punch: () => void
}

function Punch({ user, backToUsers, punch, count }: Props) {
  const MainButton = WebApp.MainButton
  MainButton.setText("Выбрать другого персонажа")
  MainButton.show()
  MainButton.onClick(() => {
    WebApp.showAlert(
      `Уже уходишь? Ты нанес ${user.namePadej} ${count} ударов!!`,
      () => {
        backToUsers()
        MainButton.hide()
      },
    )
  })

  return (
    <>
      <div className="flex justify-center items-center w-full grow">
        <button className="active:scale-95" onClick={punch}>
          <img src={user.src} />
        </button>
      </div>
      {/* <div>
        <button
          onClick={backToUsers}
          className="bg-blue-500 flex justify-center items-center w-full p-5 rounded-md text-xl active:scale-95 transition"
        >
          Выбрать другого персонажа
        </button>
      </div> */}
    </>
  )
}

export default Punch
