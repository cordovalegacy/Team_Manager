
const ButtonSet = (props) => {

    const {playerList, setPlayerList} = props

    return (

        <td className="flex justify-evenly p-2 whitespace-nowrap border-l border-gray-300">
            <button className="px-4 py-2 text-black bg-white-500 hover:bg-green-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Playing</button>
            <button className="px-4 py-2 text-black bg-white-500 hover:bg-red-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Not Playing</button>
            <button className="px-4 py-2 text-black bg-white-500 hover:bg-yellow-600 rounded-sm shadow-md focus:outline-none border border-neutral-900">Undecided</button>
        </td>

    )

}

export default ButtonSet