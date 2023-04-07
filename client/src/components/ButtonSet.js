import { useEffect } from "react"

const ButtonSet = (props) => {

    const { playerList, setPlayerList, onePlayer } = props

    const buttonHandler = (e) => {

    }

    return (

        <td className="flex justify-evenly p-2 whitespace-nowrap border-l border-gray-300">
            {
                onePlayer?.gameOne === "Playing" ? <button className="px-4 py-2 text-black bg-white-500 bg-green-400 hover:bg-green-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Playing</button>
                    : <button className="px-4 py-2 text-black bg-white-500 hover:bg-green-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Playing</button>
            }
            {
                onePlayer?.gameOne === "Not Playing" ? <button className="px-4 py-2 text-black bg-white-500 bg-red-500 hover:bg-red-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Not Playing</button>
                    : <button className="px-4 py-2 text-black bg-white-500 hover:bg-red-600 rounded-sm shadow-md focus:outline-none border border-neutral-900" 
                    onClick={() => setPlayerList([...playerList.filter(player => player._id !== onePlayer._id ), {...onePlayer, gameOne: "Not Playing"}])}>Not Playing</button>
            }
            {
                onePlayer?.gameOne === "Undecided" ? <button className="px-4 py-2 text-black bg-white-500 bg-yellow-300 hover:bg-yellow-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Undecided</button> :
                    <button className="px-4 py-2 text-black bg-white-500 hover:bg-yellow-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Undecided</button>
            }

        </td>

    )

}

export default ButtonSet