import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function EditFlashCard() {
    const [question, setQuestion] = useState()
    const [answer, setAnswer] = useState()
    const [difficulty, setDifficulty] = useState()
    const [category, setCategory] = useState()
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/card/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setQuestion(data.question);
                    setAnswer(data.answer);
                    setDifficulty(data.difficulty);
                    setCategory(data.category);
                } else {
                    toast.error('Unsuccessful to fetch data');
                }
            }
            catch (error) {
                toast.error('Failed to fetch data');
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/card/edit/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    question,
                    answer,
                    difficulty,
                    category
                })
            });
            if (response.ok) {
                toast.success('Card updated successfully');
                setQuestion('');
                setAnswer('');
                setDifficulty('');
                setCategory('');
            }
        } catch (error) {
            toast.error('Failed to update card');
            console.log(error)
        }
    }

const onChangeQuestion = (event) => {
    setQuestion(event.target.value);
}

const onChangeAnswer = (event) => {
    setAnswer(event.target.value);
}

const onChangeCategory = (event) => {
    setCategory(event.target.value);
}

const onChangeDifficulty = (event) => {
    setDifficulty(event.target.value);
}


return (
    <>
        <div className='w-full h-[calc(91vh-2px)] flex items-center justify-center'>
            <div className=' border-violet-600 border w-[30%] box-border px-12 pb-10 rounded-lg'>
                <div className='text-xl font-semibold flex justify-center items-center h-[10vh] text-violet-600'>Update FlashCard</div>
                <form onSubmit={submitHandler} className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label htmlFor="Que" className="block mb-2 text-sm font-medium text-gray-900">Question</label>
                        <input type="text" id="que" value={question} onChange={onChangeQuestion} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="ans" className="block mb-2 text-sm font-medium text-gray-900">Answer</label>
                        <textarea id="ans" value={answer} onChange={onChangeAnswer} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <div className='w-full flex items-center justify-center text-sm font-medium text-gray-900 mb-5 gap-10'>
                        <div className='flex-col '>
                            <div className='mb-1'><label htmlFor="options" className="mb-1">Difficulty</label></div>
                            <div><select
                                id="options"
                                value={difficulty}
                                onChange={onChangeDifficulty}
                                className="p-2 border rounded-md w-28"
                                required
                            >
                                <option value="">Select</option>
                                <option value="EASY">EASY</option>
                                <option value="MEDIUM">MEDIUM</option>
                                <option value="HARD">HARD</option>
                            </select></div>
                        </div>
                        <div className=''>
                            <div className='mb-1'><label htmlFor="options" className="mb-1">Category</label></div>
                            <div><select
                                id="options"
                                value={category}
                                onChange={onChangeCategory}
                                className="p-2 border rounded-md w-28"
                                required
                            >
                                <option value="">Select</option>
                                <option value="OS">OS</option>
                                <option value="DBMS">DBMS</option>
                                <option value="OOPS">OOPS</option>
                                <option value="MISC">MISC</option>
                                <option value="CN">CN</option>
                            </select></div>
                        </div>
                    </div>
                    <button type="submit" className=" text-white bg-violet-600 hover:bg-violet-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Update</button>
                </form>
            </div>
        </div>
    </>
)
}

export default EditFlashCard