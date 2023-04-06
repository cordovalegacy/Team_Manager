import { useState } from "react"

const Create = (props) => {

    const[validated, setValidated] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <form className="bg-cyan text-white px-8 pt-6 pb-8" onSubmit={submitHandler}>
            <div className="mb-4">
                <label className="block text-gray-200 font-bold mb-2" htmlFor="playerName">Player Name</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="playerName"
                    name="playerName"
                    type="text"
                    placeholder="Enter player name"
                    required
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-200 font-bold mb-2" htmlFor="playerPosition">Player Position</label>
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