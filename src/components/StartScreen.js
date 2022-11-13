import './StartScreen.css'

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <h1>Adivinha Palavra</h1>
        <p>Click para começa a jogar</p>
        <button onClick={startGame}>Começa o jogo</button>
    </div>
  )
}

export default StartScreen