interface Props {
  users: string[]
  clickUser?: (index: number) => void
}

function SelectUser({ users, clickUser }: Props) {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center grow">
      {users.map((user, i) => (
        <button
          key={user}
          className="w-40 active:rotate-12 transition"
          onClick={() => setTimeout(() => clickUser && clickUser(i), 800)}
        >
          <img src={user} />
        </button>
      ))}
    </div>
  )
}

export default SelectUser
