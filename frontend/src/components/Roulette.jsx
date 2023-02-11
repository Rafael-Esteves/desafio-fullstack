import { useEffect, useState, useRef } from "react";
import CountdownTimer from "./CountdownTimer";
import Tile from "./Tile";

//define os números que serão exibidos na roleta
const tiles = [3, 9, 5, 11, 6, 7, 8, 4, 0, 12, 14, 10, 3, 2, 1, 13];
//aqui eu optei por simplemente repetir a lista de números para que a roleta fique mais longa e dê a impressão de dar várias voltas antes de parar
const allTiles = [
  ...tiles,
  ...tiles,
  ...tiles,
  ...tiles,
  ...tiles,
  ...tiles,
  ...tiles,
];

function Roulette({ setButtonEnabled, currentBet, setBalance, setCurrentBet }) {
  const [winner, setWinner] = useState(20);
  const [isRolling, setIsRolling] = useState(false);
  const [isWaiting, setIsWaiting] = useState(true);
  const [distance, setDistance] = useState(0);
  const [transitionDuration, setTransitionDuration] = useState(7800);
  const ref = useRef(null);

  useEffect(() => {
    setTransitionDuration(7800);

    const roll = async () => {
      //define o número vencedor como um número aleatório entre 1 e 15

      setIsRolling(true);
      setIsWaiting(false);
      setButtonEnabled(false);

      //Gera um número aleatório para simular a roleta parando em uma região aleatória do tile
      const random = Math.floor(Math.random() * 100) + 20;
      //define o tamanho de cada passo, sendo um passo igual à largura do tile + o gutter
      const step = 156;
      //define a posição do vencedor na penúltima volta da roleta, pegando o maior index que contem o número vencedor e subtraindo dele a volta final
      const winnerPosition = allTiles.lastIndexOf(winner) - tiles.length;
      //Calcula quantos passos serão necessários para chegar na posição do vencedor
      const steps = winnerPosition * step;
      //Calcula a posição final da roleta, subtraindo a metade da largura do container para centralizar o tile vencedor
      const halfContainerWidth = ref.current.offsetWidth / 2;
      const FinalPosition = -steps + halfContainerWidth - random;
      setDistance(FinalPosition);

      setTimeout(() => {
        setIsRolling(false);
        //Ajusta a posição final da roleta para que o tile vencedor fique centralizado em relação ao ponteiro
        const adjustedDistance = FinalPosition - (step / 2 - 6) + random;
        setTransitionDuration(900);
        setDistance(adjustedDistance);
        setTimeout(() => {
          setIsWaiting(true);
          setButtonEnabled(true);
          const firstZeroPosition = allTiles.indexOf(0);
          const stepsToZero = firstZeroPosition * step;
          const finalZeroPosition = -stepsToZero + halfContainerWidth;
          setDistance(finalZeroPosition - (step / 2 - 6));
          setCurrentBet({
            betAmount: 0,
            color: null,
          });

          //set the
        }, 2000);
      }, 7800);
    };
    if (winner !== 20) {
      roll();
    }

    //Todo: escutar pelo evento de resize e rodar esse useEffect novamente, pois quando o tamanho da tela muda, a width do container também muda e a roleta fica desalinhada}
  }, [winner]);

  const rollingText = () => {
    if (isRolling) {
      return <div className="w-full text-center">Rolling...</div>;
    }
    return null;
  };

  const winnerText = () => {
    if (!isRolling && !isWaiting) {
      return (
        <div className="w-full text-center">
          <div className="text-2xl">Blaze rolled: {winner}!</div>
        </div>
      );
    }
    return null;
  };

  const waitingText = () => {
    if (isWaiting) {
      return (
        <div className="w-full text-center">
          <div className="text-2xl">
            <CountdownTimer
              setWinner={setWinner}
              duration={15000}
              currentBet={currentBet}
              setBalance={setBalance}
            ></CountdownTimer>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="h-3/4 m-4 border-b border-b-[#323b45] relative overflow-hidden ">
        <div className="z-10 absolute h-[14rem] w-1 bg-white top-0 bottom-0 right-0 left-0 m-auto"></div>
        <div
          className={`bg-[#0f1923] absolute top-0 left-0 w-full h-full z-20  opacity-80 ${
            isWaiting ? "" : "hidden"
          }`}
        ></div>
        <div
          ref={ref}
          className="w-full h-full bg-black rounded flex flex-col justify-around overflow-hidden"
        >
          <div className="z-30 top-0 left-0 w-full px-10 pt-10 absolute text-center">
            {rollingText()}
            {winnerText()}
            {waitingText()}
          </div>
          <div
            style={{
              transform: `translate(${distance}px)`,
              transitionDuration: `${transitionDuration}ms`,
            }}
            className={`flex flex-row gap-3 ease-out transition-transform`}
          >
            {allTiles.map((number, index) => (
              <Tile number={number} key={index.toString()}></Tile>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Roulette;
