import React from "react";
import BetItem from "./BetItem";

const Bet = () => (  
  <div>
    <h1>Voorspel de scores van de Rode Duivels op het WK!</h1>
    <form>
        <ul>
            <BetItem ploeg1="Belgie" ploeg2="Panama" />
            <BetItem ploeg1="Belgie" ploeg2="Tunesië" />
            <BetItem ploeg1="Engeland" ploeg2="Belgie" />
        </ul>
        <button>Bevestig deze scores</button>
    </form>
  </div>
);

export default Bet;
