import { Link } from "react-router-dom"
const List = (props) => {

    const { playerList, setPlayerList, players, status } = props

    return (
        <table className="w-full table-auto border border-gray-300 divide-y h-auto divide-gray-300 overflow-y-scroll scroll-smooth scrollbar-none">
            {
                players ?
                    <caption className="text-left caption-top py-5 pl-10 bg-stone-300 border-b-2 border-b-cyan-600">
                        <div className="flex items-center gap-8 text-xl font-bold text-cyan-900 underline">
                            <Link to={'/'}>List</Link>
                            <p>|</p>
                            <Link to={'/create'}>Add Player</Link>
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
                            <th className="font-extrabold border-l border-gray-300">Player Name</th>
                            <th className="font-extrabold border-l border-gray-300">Actions</th>
                        </tr>
                        : null
                }
            </thead>
            <tbody className="bg-white divide-y divide-gray-300">
                {
                    players ?
                        playerList.map((onePlayer, idx) => (
                            <tr className="text-xs font-medium text-gray-500 uppercase tracking-wider" key={idx}>
                                <td className="p-2 whitespace-nowrap border-l border-gray-300">{onePlayer.name}</td>
                                <td className="p-2 whitespace-nowrap border-l border-gray-300">{onePlayer.position}</td>
                                <td className="p-2 whitespace-nowrap border-l border-gray-300">
                                    <button className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Delete</button>
                                </td>
                            </tr>
                        ))
                        : null
                }
            </tbody>
        </table>
    )

}
export default List