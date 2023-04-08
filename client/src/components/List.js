import { Link } from "react-router-dom"
import ButtonSet from "./ButtonSet"
import axios from "axios"
import { useEffect } from "react"

const List = (props) => {

    const { playerList, setPlayerList, players, status, gameOne, gameTwo, gameThree } = props

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/sports')
            .then((res) => {
                console.log("Get All: ", res.data)
                setPlayerList(res.data)
            })
            .catch((err) => {
                console.log("Something went wrong: ", err)
            })
    }, [])

    const deleteHandler = (onePlayerIDFromMap) => {
        axios
            .delete(`http://localhost:8000/api/sports/${onePlayerIDFromMap}`)
            .then((res) => {
                console.log("Delete Data: ", res.data)
                setPlayerList(playerList.filter((allOtherPlayers) => allOtherPlayers._id !== onePlayerIDFromMap))
            })
            .catch((err) => {
                console.log("Something went wrong: ", err)
            })
    }


    return (
        <table className="w-full table-auto border border-gray-300 divide-y h-auto divide-gray-300 overflow-y-scroll scroll-smooth scrollbar-none">
            {
                players ?
                    <caption className="text-left caption-top py-5 pl-10 bg-stone-300 border-b-2 border-b-cyan-600">
                        <div className="flex items-center gap-8 text-xl font-bold text-cyan-900 underline">
                            <Link to={'/'}>List</Link>
                            <p>|</p>
                            <Link id="active-link" to={'/create'}>Add Player</Link>
                        </div>
                    </caption> :
                    null
            }
            {
                status ?
                    <caption className="text-center caption-top py-5 pl-10 bg-stone-300 border-b-2 border-b-cyan-600">
                        <div className="flex justify-center items-center gap-8 text-xl font-bold text-cyan-900 underline">
                            <Link to={'/status/1'}>Game One</Link>
                            <p>|</p>
                            <Link to={'/status/2'}>Game Two</Link>
                            <p>|</p>
                            <Link to={'/status/3'}>Game Three</Link>
                        </div>
                    </caption> :
                    null
            }
            <thead>
                {
                    players ?
                        <tr className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                            <th className="font-extrabold border-l border-gray-300 p-5">Player Name</th>
                            <th className="font-extrabold border-l border-gray-300 p-5">Preferred Position</th>
                            <th className="font-extrabold border-l border-gray-300 p-5">Actions</th>
                        </tr>
                        : null
                }
                {
                    status ?
                        <tr className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                            <th className="font-extrabold border-l border-gray-300 p-5">Player Name</th>
                            <th className="font-extrabold border-l border-gray-300 p-5">Actions</th>
                        </tr>
                        : null
                }
            </thead>
            <tbody className="bg-white divide-y divide-gray-300">
                {
                    players ?
                        playerList
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((onePlayer, idx) => (
                            <tr className="text-xs font-medium text-gray-500 uppercase tracking-wider" key={idx}>
                                <td className="p-2 whitespace-nowrap border-l border-gray-300">{onePlayer.name}</td>
                                <td className="p-2 whitespace-nowrap border-l border-gray-300">{onePlayer.position}</td>
                                <td className="p-2 whitespace-nowrap border-l border-gray-300">
                                    <button onClick={() => deleteHandler(onePlayer._id)} className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Delete</button>
                                </td>
                            </tr>
                        ))
                        : null
                }
                {
                    status && gameOne ?
                        playerList
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((onePlayer, idx) => (
                            <tr className="text-xs font-medium text-gray-500 uppercase tracking-wider" key={idx}>
                                <td className="p-2 whitespace-nowrap border-l border-gray-300">{onePlayer.name}</td>
                                <ButtonSet playerList={playerList} setPlayerList={setPlayerList} onePlayer={onePlayer} gameOne={gameOne}/>
                            </tr>
                        ))
                        : null
                }
                {
                    status && gameTwo ?
                        playerList
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((onePlayer, idx) => (
                            <tr className="text-xs font-medium text-gray-500 uppercase tracking-wider" key={idx}>
                                <td className="p-2 whitespace-nowrap border-l border-gray-300">{onePlayer.name}</td>
                                <ButtonSet playerList={playerList} setPlayerList={setPlayerList} onePlayer={onePlayer} gameTwo={gameTwo}/>
                            </tr>
                        ))
                        : null
                }
                {
                    status && gameThree ?
                        playerList
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((onePlayer, idx) => (
                            <tr className="text-xs font-medium text-gray-500 uppercase tracking-wider" key={idx}>
                                <td className="p-2 whitespace-nowrap border-l border-gray-300">{onePlayer.name}</td>
                                <ButtonSet playerList={playerList} setPlayerList={setPlayerList} onePlayer={onePlayer} gameThree={gameThree}/>
                            </tr>
                        ))
                        : null
                }
            </tbody>
        </table>
    )

}
export default List