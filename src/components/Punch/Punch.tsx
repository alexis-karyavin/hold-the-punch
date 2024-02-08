interface Props {
  user: string
  backToUsers: () => void
  punch: () => void
}

function Punch({ user, backToUsers, punch }: Props) {
  return (
    <>
      <div className="flex justify-center items-center w-full grow">
        <button className="active:scale-95" onTouchStart={punch}>
          <img src={user} />
        </button>
      </div>
      <div>
        <button
          onClick={backToUsers}
          className="bg-blue-500 flex justify-center items-center w-full p-5 rounded-md text-xl active:scale-95 transition"
        >
          Выбрать другого персонажа
        </button>
      </div>
    </>
  )
}

export default Punch
