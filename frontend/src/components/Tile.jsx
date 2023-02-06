import { useState } from "react";

function Tile({number}) {
  const backgroundColor = number == 0 ? "white" : (number < 8 ? "[#E6504B]" : "[#343B4A]");
  const color = number == 0 ? '[#E6504B]' : 'white';
  const text = () => {
    if (number == 0) {
      return (
        <img src="https://blaze.com/static/media/logo-icon.de8b3b08.svg" alt="" />
      );
    }
    return number;
  }
  return (
    <div className={` transition-all rounded flex items-center justify-center text-center align-middle flex-grow flex-shrink-0 h-36 w-36 max-w-none bg-${backgroundColor} text-${color}`}>
      <div className={`border-4 w-20 h-20 font-extrabold text-xl border-${color} rounded-full flex justify-center align-middle items-center`}>{text()}</div>
    </div>
  );
}

export default Tile;
