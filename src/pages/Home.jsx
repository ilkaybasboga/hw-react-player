import { useState } from "react";
import Player from "../components/Player";
import TransferList from "../components/TransferList";
import {playerData} from "../helper/data"
import {transferData} from "../helper/data"

const Home = () => {
const [player, setPlayer] = useState(playerData)
const [transferList, setTransferList] = useState(transferData)





  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-light text-decoration-underline mt-3">MY BEST ACTİVE 11 LİNE-UP</h1>
      <h5 className="text-light text-decoration-underline mt-3">All for free... You are free to transfer your dream player to your team.</h5>
    <Player player={player} transferList={transferList} setTransferList={setTransferList}/>
    <TransferList transferList={transferList} setTransferList={setTransferList}/>
    </main>
  )
}

export default Home;
