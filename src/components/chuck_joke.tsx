// An alternative way of declaring a component is to write it as a function which
// returns a React.ReactNode. This is equivalent to the syntax in <ChuckCard/>
interface JokeProps{
	joke: string
}
function ChuckJoke({joke}: JokeProps): JSX.Element {

	return (
		<p>{joke}</p>
	)
}

export default ChuckJoke;