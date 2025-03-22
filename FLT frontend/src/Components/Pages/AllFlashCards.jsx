import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function AllFlashCards() {

    const [cards, setCards] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAllCards = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/allCards`);
                if (!response.ok) {
                    toast.error('Failed to fetch cards')
                    return;
                }
                const data = await response.json();
                setCards(data);
            } catch (error) {
                toast.error(error.message)
            }
        }

        fetchAllCards();
    }, [])

    const handleEdit = async (id) => {
        navigate(`/card/edit/${id}`)
    }

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/card/delete/${id}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const data = await response.json();
                toast.success("Card deleted successfully");
                setCards(cards.filter(card => card.id !== id));
                console.log(data.message);
            }
        } catch (error) {
            toast.error('Failed to delete the card')
        }
    }

    return (
        <>
            <div className='w-full flex justify-center mt-10'>
                <div className="relative overflow-x-auto w-[70%]">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-5">
                            <tr className='border-b'>
                                <th scope="col" className="px-6 py-3 w-16 bg-gray-50">
                                    Card No.
                                </th>
                                <th scope="col" className="px-6 py-3 w-64 bg-gray-100">
                                    Question
                                </th>
                                <th scope="col" className="px-6 py-3 w-64 bg-gray-50">
                                    Answer
                                </th>
                                <th scope="col" className="px-6 py-3 w-20 bg-gray-100">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cards.map((card) => (
                                <tr key={card.id} className="bg-white border-b">
                                    <td className="px-6 py-4 w-16 bg-gray-50 text-violet-600">
                                        #{card.cardOrder}
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-100 text-wrap">
                                        {card.question}
                                    </th>
                                    <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap bg-gray-50 text-wrap">
                                        {card.answer}
                                    </td>
                                    <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap bg-gray-100">
                                        <div className='flex flex-row gap-2'>
                                            <span title='Edit' className='cursor-pointer' onClick={() => handleEdit(card.id)}><svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                                            </svg></span>
                                            <span title='Delete' className='cursor-pointer' onClick={() => handleDelete(card.id)}><svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                                            </svg></span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default AllFlashCards