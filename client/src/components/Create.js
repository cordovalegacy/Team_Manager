import { useState } from "react"
import { Link } from "react-router-dom"

const Create = (props) => {

    const[validated, setValidated] = useState(false)

    const {playerList, setPlayerList, players} = props

    const submitHandler = (e) => {
        e.preventDefault()
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
                    id="playerName"
                    name="playerName"
                    type="text"
                    placeholder="Enter player name"
                    required
                />
            </div>
            <div className="mb-6 px-20">
                <label className="block text-stone-900 font-bold mb-2 text-left" htmlFor="playerPosition">Player Position</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="playerPosition"
                    name="playerPosition"
                    type="text"
                    placeholder="Enter player position"
                    required
                />
            </div>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Add Player</button>
        </form>
    )

}
export default Create