interface AnimatedCounterProps {
  duration?: number
  value: number
}

function AnimatedCounter({ value }: AnimatedCounterProps) {
  //
  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((prevCount) => Math.min(prevCount + 1, value))
  //     if (count === value) clearInterval(interval)
  //   }, duration / value)
  //   return () => clearInterval(interval)
  // }, [value])
  return <>{value.toLocaleString("ru-RU")}</>
}

export default AnimatedCounter
