import { useEffect, useState } from "react"
import axios from 'axios'

const ButtonSet = (props) => {

    const { playerList, setPlayerList, onePlayer, gameOne, gameTwo, gameThree } = props
    const[buttonPressed, setButtonPressed] = useState(false) //<= USED TO CONTROL UPDATE FUNCTION SO THE USEEFFECT DOESN'T TRY TO UPDATE ALL PLAYERS ONMOUNT (ONLOAD)

    const buttonHandler = (playerFromMap, game, status) => {
        //THIS FUNCTION TAKE IN ARGUMENTS TO KNOW WHICH PLAYER TO UPDATE BASED OFF WHICH BUTTON WAS PRESSED AND FOR WHICH GAME
        if (game === 1 && status === "Playing") {
            setPlayerList([...playerList.filter(player => player._id !== playerFromMap._id), { ...playerFromMap, gameOne: "Playing" }])
            setButtonPressed(true)
            console.log(`${playerFromMap.name} is ${status} in game ${game}`)
        }
        else if (game === 1 && status === "Not Playing") {
            setPlayerList([...playerList.filter(player => player._id !== playerFromMap._id), { ...playerFromMap, gameOne: "Not Playing" }])
            setButtonPressed(true)
            console.log(`${playerFromMap.name} is ${status} in game ${game}`)
        }
        else if (game === 1 && status === "Undecided") {
            setPlayerList([...playerList.filter(player => player._id !== playerFromMap._id), { ...playerFromMap, gameOne: "Undecided" }])
            setButtonPressed(true)
            console.log(`${playerFromMap.name} is ${status} in Game ${game}`)
        }
        else if (game === 2 && status === "Playing") {
            setPlayerList([...playerList.filter(player => player._id !== playerFromMap._id), { ...playerFromMap, gameTwo: "Playing" }])
            setButtonPressed(true)
            console.log(`${playerFromMap.name} is ${status} in game ${game}`)
        }
        else if (game === 2 && status === "Not Playing") {
            setPlayerList([...playerList.filter(player => player._id !== playerFromMap._id), { ...playerFromMap, gameTwo: "Not Playing" }])
            setButtonPressed(true)
            console.log(`${playerFromMap.name} is ${status} in game ${game}`)
        }
        else if (game === 2 && status === "Undecided") {
            setPlayerList([...playerList.filter(player => player._id !== playerFromMap._id), { ...playerFromMap, gameTwo: "Undecided" }])
            setButtonPressed(true)
            console.log(`${playerFromMap.name} is ${status} in Game ${game}`)
        }
        if (game === 3 && status === "Playing") {
            setPlayerList([...playerList.filter(player => player._id !== playerFromMap._id), { ...playerFromMap, gameThree: "Playing" }])
            setButtonPressed(true)
            console.log(`${playerFromMap.name} is ${status} in game ${game}`)
        }
        else if (game === 3 && status === "Not Playing") {
            setPlayerList([...playerList.filter(player => player._id !== playerFromMap._id), { ...playerFromMap, gameThree: "Not Playing" }])
            setButtonPressed(true)
            console.log(`${playerFromMap.name} is ${status} in game ${game}`)
        }
        else if (game === 3 && status === "Undecided") {
            setPlayerList([...playerList.filter(player => player._id !== playerFromMap._id), { ...playerFromMap, gameThree: "Undecided" }])
            setButtonPressed(true)
            console.log(`${playerFromMap.name} is ${status} in Game ${game}`)
        }
    }

    //THE USEEFFECT IS NEEDED BECAUSE THE STATE UPDATE IS A FRAME BEHIND WHEN WE PUT THE AXIOS CALL IN THE BUTTON HANDLER FUNCTION
    //WE PASS A POINTER IN THE DEPENDENCY ARRAY OF THE USEEFFECT SO IT KNOW WHEN* TO UPDATE THAT SINGLE PLAYER
    //WHEN THE VALUE OF ONEPLAYER IS CHANGED (SEE BUTTON HANDLER FUNCTION) THEN THE USEEFFECT WILL TAKE THE CURRENT DATA AND UPDATE THE PLAYER
    useEffect(() => {
        if (onePlayer && buttonPressed === true) {
            axios
                .put(`http://localhost:8000/api/sports/${onePlayer._id}`, onePlayer)
                .then((res) => {
                    console.log("Updated Player", res.data)
                    setButtonPressed(false)
                })
                .catch((err) => {
                    console.log("Something went wrong: ", err)
                })
        }
    }, [onePlayer])

    return (
        <>
            {gameOne ?
                <td className="flex justify-evenly p-2 whitespace-nowrap border-l border-gray-300">
                    {
                        onePlayer?.gameOne === "Playing" ? <button className="px-4 py-2 text-black bg-white-500 bg-green-400 hover:bg-green-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Playing</button>
                            : <button className="px-4 py-2 text-black bg-white-500 hover:bg-green-600 rounded-sm shadow-md focus:outline-none border border-neutral-900"
                                onClick={(e) => buttonHandler(onePlayer, 1, "Playing")}>Playing</button>
                    }
                    {
                        onePlayer?.gameOne === "Not Playing" ? <button className="px-4 py-2 text-black bg-white-500 bg-red-500 hover:bg-red-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Not Playing</button>
                            : <button className="px-4 py-2 text-black bg-white-500 hover:bg-red-600 rounded-sm shadow-md focus:outline-none border border-neutral-900"
                                onClick={(e) => buttonHandler(onePlayer, 1, "Not Playing")}>Not Playing</button>
                    }
                    {
                        onePlayer?.gameOne === "Undecided" ? <button className="px-4 py-2 text-black bg-white-500 bg-yellow-300 hover:bg-yellow-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Undecided</button> :
                            <button className="px-4 py-2 text-black bg-white-500 hover:bg-yellow-600 rounded-sm shadow-md focus:outline-none border border-neutral-900"
                                onClick={(e) => buttonHandler(onePlayer, 1, "Undecided")}>Undecided</button>
                    }

                </td>
                : null}
            {gameTwo ?
                <td className="flex justify-evenly p-2 whitespace-nowrap border-l border-gray-300">
                    {
                        onePlayer?.gameTwo === "Playing" ? <button className="px-4 py-2 text-black bg-white-500 bg-green-400 hover:bg-green-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Playing</button>
                            : <button className="px-4 py-2 text-black bg-white-500 hover:bg-green-600 rounded-sm shadow-md focus:outline-none border border-neutral-900"
                                onClick={() => buttonHandler(onePlayer, 2, "Playing")}>Playing</button>
                    }
                    {
                        onePlayer?.gameTwo === "Not Playing" ? <button className="px-4 py-2 text-black bg-white-500 bg-red-500 hover:bg-red-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Not Playing</button>
                            : <button className="px-4 py-2 text-black bg-white-500 hover:bg-red-600 rounded-sm shadow-md focus:outline-none border border-neutral-900"
                                onClick={() => buttonHandler(onePlayer, 2, "Not Playing")}>Not Playing</button>
                    }
                    {
                        onePlayer?.gameTwo === "Undecided" ? <button className="px-4 py-2 text-black bg-white-500 bg-yellow-300 hover:bg-yellow-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Undecided</button> :
                            <button className="px-4 py-2 text-black bg-white-500 hover:bg-yellow-600 rounded-sm shadow-md focus:outline-none border border-neutral-900"
                                onClick={() => buttonHandler(onePlayer, 2, "Undecided")}>Undecided</button>
                    }

                </td>
                : null}
            {gameThree ?
                <td className="flex justify-evenly p-2 whitespace-nowrap border-l border-gray-300">
                    {
                        onePlayer?.gameThree === "Playing" ? <button className="px-4 py-2 text-black bg-white-500 bg-green-400 hover:bg-green-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Playing</button>
                            : <button className="px-4 py-2 text-black bg-white-500 hover:bg-green-600 rounded-sm shadow-md focus:outline-none border border-neutral-900"
                                onClick={() => buttonHandler(onePlayer, 3, "Playing")}>Playing</button>
                    }
                    {
                        onePlayer?.gameThree === "Not Playing" ? <button className="px-4 py-2 text-black bg-white-500 bg-red-500 hover:bg-red-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Not Playing</button>
                            : <button className="px-4 py-2 text-black bg-white-500 hover:bg-red-600 rounded-sm shadow-md focus:outline-none border border-neutral-900"
                                onClick={() => buttonHandler(onePlayer, 3, "Not Playing")}>Not Playing</button>
                    }
                    {
                        onePlayer?.gameThree === "Undecided" ? <button className="px-4 py-2 text-black bg-white-500 bg-yellow-300 hover:bg-yellow-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Undecided</button> :
                            <button className="px-4 py-2 text-black bg-white-500 hover:bg-yellow-600 rounded-sm shadow-md focus:outline-none border border-neutral-900"
                                onClick={() => buttonHandler(onePlayer, 3, "Undecided")}>Undecided</button>
                    }

                </td>
                : null}
        </>
    )

}

export default ButtonSet