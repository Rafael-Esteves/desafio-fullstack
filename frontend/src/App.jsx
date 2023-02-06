import { useState } from "react";
import "./App.css";
import ControlsFooter from "./components/ControlsFooter";
import Roulette from "./components/Roulette";
import NumberInput from "./components/NumberInput";

function App() {
  const [auto, setAuto] = useState(false);
  const [amount, setAmount] = useState();
  const [color, setColor] = useState("black");
  const [totalBets, setTotalBets] = useState();
  const [betButtonText, setBetButtonText] = useState("Waiting");
  const [totalBetsFocus, setTotalBetsFocus] = useState(false);
  const [amountFocus, setAmountFocus] = useState(false);

  return (
    <>
      <div className="h-[700px] flex flex-row justify-center mt-16 2xl:mx-[15rem] bg-[#1A242D]">
        <div className="w-1/3 h-full border-r border-r-[#323b45] z-50 bg-[#1A242D] pl-10 pr-10 pt-5 pb-5 justify-between flex flex-col">
          <div>
            <div className=" flex-row justify-center">
              <div className="flex p-1 border rounded border-[#323b45]">
                <div
                  onClick={() => setAuto(false)}
                  className={` p-4 cursor-pointer grow text-center rounded ${
                    !auto ? "bg-[#0F1923]" : ""
                  }`}
                >
                  Normal
                </div>
                <div
                  onClick={() => setAuto(true)}
                  className={` p-4 cursor-pointer grow text-center rounded ${
                    auto ? "bg-[#0F1923]" : ""
                  }`}
                >
                  Auto
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between mt-5">
              <div className="flex w-2/3 h-16">
                <NumberInput
                  visible={true}
                  value={amount}
                  setValue={setAmount}
                  setFocus={setAmountFocus}
                  placeholder="Amount"
                  emblem={"R$"}
                  emblemInvisible={false}
                  isFocused={amountFocus}
                ></NumberInput>
              </div>
              <div
                className="w-1/6 border rounded border-[#323b45] justify-center flex items-center cursor-pointer"
                onClick={() => setAmount(amount / 2)}
              >
                ½
              </div>
              <div
                className="w-1/6 border rounded border-[#323b45]  justify-center flex items-center cursor-pointer"
                onClick={() => setAmount(2 * amount)}
              >
                2x
              </div>
            </div>
            <div className="flex w-full mt-5 mb-2">
              <div className="w-full">Select Color</div>
            </div>
            <div className="flex w-full items-center justify-between gap-3 mb-5">
              <div
                onClick={() => setColor("red")}
                className={`cursor-pointer w-full ${
                  color === "red" ? "border-2 border-white rounded" : ""
                }`}
              >
                <div
                  className={`h-16 items-center justify-center flex bg-[#E6504B]  rounded ${
                    color === "red" ? "border border-black" : ""
                  }`}
                >
                  x2
                </div>
              </div>
              <div
                onClick={() => setColor("white")}
                className={`cursor-pointer w-full ${
                  color === "white" ? "border-2 border-[#E6504B] rounded" : ""
                }`}
              >
                <div
                  className={`h-16 items-center justify-center flex bg-white text-[#E6504B] text-center rounded ${
                    color === "white" ? "border border-black" : ""
                  }`}
                >
                  x14
                </div>
              </div>
              <div
                onClick={() => setColor("black")}
                className={`cursor-pointer w-full ${
                  color === "black" ? "border-2 border-white rounded" : ""
                }`}
              >
                <div
                  className={`h-16 items-center justify-center flex bg-[#343B4A] text-center rounded ${
                    color === "white" ? "border border-black" : ""
                  }`}
                >
                  x2
                </div>
              </div>
            </div>
            <NumberInput
              hidden={!auto}
              value={totalBets}
              setValue={setTotalBets}
              setFocus={setTotalBetsFocus}
              placeholder={"Total Bets"}
              emblem={"∞"}
              emblemInvisible={totalBets}
              isFocused={totalBetsFocus}
              emblemClass={"text-4xl"}
            ></NumberInput>
            <div className={`flex w-full py-6 justify-between mb-40`}>
              <button
                className={`w-full rounded bg-[#E6504B] h-16 flex items-center justify-center`}
              >
                {betButtonText}
              </button>
            </div>
          </div>
          <ControlsFooter></ControlsFooter>
        </div>
        <div className="w-2/3">
          <Roulette></Roulette>
        </div>
      </div>
    </>
  );
}

export default App;
