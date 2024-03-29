import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

const Create = (props) => {

    const [playerName, setPlayerName] = useState("")
    const [playerPosition, setPlayerPosition] = useState("")
    const navigate = useNavigate()

    const [errors, setErrors] = useState({
        lengthValidation: "Must be at least 3 characters",
        blankValidation: "Player name is required"
    })

    const { playerList, setPlayerList, players } = props
    
    const formData = {
        name:playerName,
        position:playerPosition,
        gameOne: "Undecided",
        gameTwo: "Undecided",
        gameThree: "Undecided"
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:8000/api/sports', formData)
            .then((res) => {
                console.log("Successful Post: ", res.data)
                setPlayerList([...playerList, {
                    name: playerName,
                    position: playerPosition,
                    gameOne: "Undecided",
                    gameTwo: "Undecided",
                    gameThree: "Undecided"
                }])
                navigate('/')
            })
            .catch((err) => {
                console.log("Something went wrong: ", [err.response.data.errors.name])
                // setErrors([err.response.data.errors.name]) not needed due to disabled button
            })
    }

    return (
        <form className="w-full bg-cyan text-white" onSubmit={submitHandler}>
            {
                players ?
                    <div className="text-left caption-top py-5 pl-10 bg-stone-300 border-b-2 border-b-cyan-600">
                        <div className="flex items-center gap-8 text-xl font-bold text-cyan-900 underline">
                            <Link to={'/'}>List</Link>
                            <p>|</p>
                            <Link to={'/create'}>Add Player</Link>
                        </div>
                    </div> :
                    null
            }
            <div className="my-8 px-20">
                <label className="block text-stone-900 font-bold mb-2 text-left" htmlFor="playerName">Player Name</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="playerName"
                    type="text"
                    placeholder="Enter player name"
                    onChange={(e) => setPlayerName(e.target.value)}
                />
                {
                playerName.length == 0 ? <p className="text-red-600 text-left p-2">{errors.blankValidation}</p> : null
                }
                {
                playerName.length < 3 && playerName.length !== 0 ? <p className="text-red-600 text-left p-2">{errors.lengthValidation}</p> : null
                }
            </div>
            <div className="mb-6 px-20">
                <label className="block text-stone-900 font-bold mb-2 text-left" htmlFor="playerPosition">Player Position</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="playerPosition"
                    type="text"
                    placeholder="Enter player position"
                    onChange={(e) => setPlayerPosition(e.target.value)}
                />
            </div>
                {
                playerName.length < 3 ? 
                <button className="bg-gray-100 text-red-200 opacity-80 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" disabled>Add Player</button> : 
                <button className="bg-gray-200 hover:bg-gray-300 text-green-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Add Player</button>
                }
            
        </form>
    )

}
export default Create