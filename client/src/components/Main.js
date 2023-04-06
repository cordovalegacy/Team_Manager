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
            gameOne: null,
            gameTwo: null,
            gameThree: null
        },
        {
            name: "Bell Ruth",
            position: "Cuddler",
            gameOne: null,
            gameTwo: null,
            gameThree: null
        }
    ])

    const players = true
    const status = true


    return (
        <main className="m-auto bg-white border border-slate-900 h-96 overflow-x-auto w-full rounded-sm">
            <Routes>
                <Route path="/" element={<List playerList={playerList} setPlayerList={setPlayerList} players={players} />} />
                <Route path="/create" element={<Create playerList={playerList} setPlayerList={setPlayerList} players={players} />} />
                <Route path="/status/1" element={<List playerList={playerList} setPlayerList={setPlayerList} status={status} />} />
                <Route path="/status/:id" element={<List playerList={playerList} setPlayerList={setPlayerList} status={status} />} />
            </Routes>
        </main>
    )

}

export default Main