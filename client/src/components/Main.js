import { Link } from "react-router-dom"
import List from "./List"
import Create from "./Create"
import { useState } from 'react'

const Main = (props) => {

    const { Routes, Route } = props

    const [playerList, setPlayerList] = useState([
        {
            name: "Charlesworth Pancakes",
            position: "Waterboy",
            gameOne: "Undecided",
            gameTwo: "Undecided",
            gameThree: "Undecided"
        },
        {
            name: "Bell Ruth",
            position: "Cuddler",
            gameOne:"Undecided" ,
            gameTwo: "Undecided",
            gameThree: "Undecided"
        }
    ])

    const players = true
    const status = true
    const gameOne = true
    const gameTwo = true
    const gameThree = true


    return (
        <main className="m-auto bg-white border border-slate-900 h-96 overflow-x-auto w-full rounded-sm">
            <Routes>
                <Route path="/" element={<List playerList={playerList} setPlayerList={setPlayerList} players={players} />} />
                <Route path="/create" element={<Create playerList={playerList} setPlayerList={setPlayerList} players={players} />} />
                <Route path="/status/1" element={<List playerList={playerList} setPlayerList={setPlayerList} status={status} gameOne={gameOne} />} />
                <Route path="/status/2" element={<List playerList={playerList} setPlayerList={setPlayerList} status={status} gameTwo={gameTwo} />} />
                <Route path="/status/3" element={<List playerList={playerList} setPlayerList={setPlayerList} status={status} gameThree={gameThree} />} />
            </Routes>
        </main>
    )

}

export default Main