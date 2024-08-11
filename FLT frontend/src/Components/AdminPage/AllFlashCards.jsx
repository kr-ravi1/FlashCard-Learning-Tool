import React from 'react'
import { Link } from 'react-router-dom'

function AllFlashCards() {
    return (
        <>
            <div className='h-[10vh] flex items-center'>
                <Link to="/admin/addFlash" className='bg-violet-600 hover:bg-violet-500 px-3 py-2 rounded-lg text-white ml-24'>Add FlashCard</Link>
            </div>

            <div className='w-full flex justify-center mt-3'>
                <div className="relative overflow-x-auto w-[70%]">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Q No.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Question
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4">
                                    #1
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    What is React?
                                </th>
                                <td className="px-6 py-4 flex gap-4">
                                    <span>Edit</span>
                                    <span>Del</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default AllFlashCards