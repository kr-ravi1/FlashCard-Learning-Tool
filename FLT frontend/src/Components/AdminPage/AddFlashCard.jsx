import React from 'react'

function AddFlashCard() {
    return (
        <>
        <div className='text-xl font-semibold flex justify-center items-center h-[10vh] text-violet-600'>Add a FlashCard</div>
        <div className='mt-10'>
            <form className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label for="Que" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Question</label>
                    <input type="text" id="que" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class="mb-5">
                    <label for="ans" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Answer</label>
                    <input type="text" id="ans" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button type="submit" className="text-white bg-violet-600 hover:bg-violet-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add</button>
            </form>
        </div>
        </>
    )
}

export default AddFlashCard