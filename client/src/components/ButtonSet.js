import { useEffect } from "react"
import axios from 'axios'

const ButtonSet = (props) => {

    const { playerList, setPlayerList, onePlayer, gameOne, gameTwo, gameThree } = props

    // const buttonHandler = (thing) => {
    //     axios
    //         .put(`http://localhost:8000/api/sports/`)
    // }

    return (
        <>
            {gameOne ?
                <td className="flex justify-evenly p-2 whitespace-nowrap border-l border-gray-300">
                    {
                        onePlayer?.gameOne === "Playing" ? <button className="px-4 py-2 text-black bg-white-500 bg-green-400 hover:bg-green-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Playing</button>
                            : <button className="px-4 py-2 text-black bg-white-500 hover:bg-green-600 rounded-sm shadow-md focus:outline-none border border-neutral-900"
                                onClick={() => setPlayerList([...playerList.filter(player => player._id !== onePlayer._id), { ...onePlayer, gameOne: "Playing" }])}>Playing</button>
                    }
                    {
                        onePlayer?.gameOne === "Not Playing" ? <button className="px-4 py-2 text-black bg-white-500 bg-red-500 hover:bg-red-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Not Playing</button>
                            : <button className="px-4 py-2 text-black bg-white-500 hover:bg-red-600 rounded-sm shadow-md focus:outline-none border border-neutral-900"
                                onClick={() => setPlayerList([...playerList.filter(player => player._id !== onePlayer._id), { ...onePlayer, gameOne: "Not Playing" }])}>Not Playing</button>
                    }
                    {
                        onePlayer?.gameOne === "Undecided" ? <button className="px-4 py-2 text-black bg-white-500 bg-yellow-300 hover:bg-yellow-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Undecided</button> :
                            <button className="px-4 py-2 text-black bg-white-500 hover:bg-yellow-600 rounded-sm shadow-md focus:outline-none border border-neutral-900"
                                onClick={() => setPlayerList([...playerList.filter(player => player._id !== onePlayer._id), { ...onePlayer, gameOne: "Undecided" }])}>Undecided</button>
                    }

                </td>
                : null}
            {gameTwo ?
                <td className="flex justify-evenly p-2 whitespace-nowrap border-l border-gray-300">
                    {
                        onePlayer?.gameTwo === "Playing" ? <button className="px-4 py-2 text-black bg-white-500 bg-green-400 hover:bg-green-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Playing</button>
                            : <button className="px-4 py-2 text-black bg-white-500 hover:bg-green-600 rounded-sm shadow-md focus:outline-none border border-neutral-900"
                                onClick={() => setPlayerList([...playerList.filter(player => player._id !== onePlayer._id), { ...onePlayer, gameTwo: "Playing" }])}>Playing</button>
                    }
                    {
                        onePlayer?.gameTwo === "Not Playing" ? <button className="px-4 py-2 text-black bg-white-500 bg-red-500 hover:bg-red-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Not Playing</button>
                            : <button className="px-4 py-2 text-black bg-white-500 hover:bg-red-600 rounded-sm shadow-md focus:outline-none border border-neutral-900"
                                onClick={() => setPlayerList([...playerList.filter(player => player._id !== onePlayer._id), { ...onePlayer, gameTwo: "Not Playing" }])}>Not Playing</button>
                    }
                    {
                        onePlayer?.gameTwo === "Undecided" ? <button className="px-4 py-2 text-black bg-white-500 bg-yellow-300 hover:bg-yellow-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Undecided</button> :
                            <button className="px-4 py-2 text-black bg-white-500 hover:bg-yellow-600 rounded-sm shadow-md focus:outline-none border border-neutral-900"
                                onClick={() => setPlayerList([...playerList.filter(player => player._id !== onePlayer._id), { ...onePlayer, gameTwo: "Undecided" }])}>Undecided</button>
                    }

                </td>
                : null}
            {gameThree ?
                <td className="flex justify-evenly p-2 whitespace-nowrap border-l border-gray-300">
                    {
                        onePlayer?.gameThree === "Playing" ? <button className="px-4 py-2 text-black bg-white-500 bg-green-400 hover:bg-green-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Playing</button>
                            : <button className="px-4 py-2 text-black bg-white-500 hover:bg-green-600 rounded-sm shadow-md focus:outline-none border border-neutral-900"
                                onClick={() => setPlayerList([...playerList.filter(player => player._id !== onePlayer._id), { ...onePlayer, gameThree: "Playing" }])}>Playing</button>
                    }
                    {
                        onePlayer?.gameThree === "Not Playing" ? <button className="px-4 py-2 text-black bg-white-500 bg-red-500 hover:bg-red-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Not Playing</button>
                            : <button className="px-4 py-2 text-black bg-white-500 hover:bg-red-600 rounded-sm shadow-md focus:outline-none border border-neutral-900"
                                onClick={() => setPlayerList([...playerList.filter(player => player._id !== onePlayer._id), { ...onePlayer, gameThree: "Not Playing" }])}>Not Playing</button>
                    }
                    {
                        onePlayer?.gameThree === "Undecided" ? <button className="px-4 py-2 text-black bg-white-500 bg-yellow-300 hover:bg-yellow-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Undecided</button> :
                            <button className="px-4 py-2 text-black bg-white-500 hover:bg-yellow-600 rounded-sm shadow-md focus:outline-none border border-neutral-900"
                                onClick={() => setPlayerList([...playerList.filter(player => player._id !== onePlayer._id), { ...onePlayer, gameThree: "Undecided" }])}>Undecided</button>
                    }

                </td>
                : null}
        </>
    )

}

export default ButtonSet