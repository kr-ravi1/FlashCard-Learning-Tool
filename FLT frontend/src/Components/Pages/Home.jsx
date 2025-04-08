import FlashCard from '../FlashCard/FlashCard.jsx'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

function Home() {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [difficulty, setDifficulty] = useState("ALL");
  const [category, setCategory] = useState("ALL");

  const [searchParams, setSearchParams] = useSearchParams();
  const [getSearchParams] = useSearchParams();

  const updateQuery = () => {
    setSearchParams({
      difficulty: difficulty,
      category: category
    });
  }

  useEffect(() => {
    setCategory(getSearchParams.get("category") || "ALL");
    setDifficulty(getSearchParams.get("difficulty") || "ALL");
    const fetchFlashcards = async () => {
      let query = `?difficulty=${difficulty}&category=${category}`;
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/flashcards${query}`);
      const data = await response.json();
      setFlashcards(data);
      setCurrentIndex(0);
    };
    fetchFlashcards();

  }, [searchParams]);

  const prevHandler = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : flashcards.length - 1);
  }

  const nextHandler = () => {
    setCurrentIndex(currentIndex < flashcards.length - 1 ? currentIndex + 1 : 0);
  }

  return (
    <>
      <div>
        <div className='w-full flex items-center justify-center text-gray-900 my-5 gap-10 flex-wrap'>
          <div className='flex items-center'>
            <div className='mr-2'><label htmlFor="options" className="mb-1">Difficulty</label></div>
            <div><select
              id="options"
              value={difficulty}
              onChange={(e) => { setDifficulty(e.target.value) }}
              className="p-2 border rounded-md w-28"
              onClick={() => setIsCardAvailable(false)}
            >
              <option value="ALL" selected>ALL</option>
              <option value="EASY">EASY</option>
              <option value="MEDIUM">MEDIUM</option>
              <option value="HARD">HARD</option>
            </select></div>
          </div>
          <div className='flex items-center'>
            <div className='mr-2'><label htmlFor="options" className="mb-1">Category</label></div>
            <div><select
              id="options"
              value={category}
              onChange={(e) => { setCategory(e.target.value) }}
              className="p-2 border rounded-md w-28"
              onClick={() => setIsCardAvailable(false)}
            >
              <option value="ALL" selected>ALL</option>
              <option value="OS">OS</option>
              <option value="DBMS">DBMS</option>
              <option value="OOPS">OOPS</option>
              <option value="MISC">MISC</option>
              <option value="CN">CN</option>
            </select></div>
          </div>
          <div>
            <div onClick={updateQuery} className='cursor-pointer bg-violet-600 rounded-lg px-4 py-2 hover:bg-violet-500 text-white'>Apply Filter</div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center m-10 flex-col'>
        {flashcards.length > 0 ? (<FlashCard quesNumber={flashcards[currentIndex].cardOrder} question={flashcards[currentIndex].question} answer={flashcards[currentIndex].answer} difficulty={flashcards[currentIndex].difficulty} category={flashcards[currentIndex].category} />) : (<FlashCard quesNumber="0" question="No FlashCards are Available" answer="No FlashCards are Available" difficulty="NA" category="NA" />)}
        <div className='flex flex-row gap-5'>
          <div className='cursor-pointer bg-violet-600 rounded-lg px-4 py-2 hover:bg-violet-500 text-white' onClick={prevHandler} disabled={flashcards.length === 0}>Prev</div>
          <div className='cursor-pointer bg-violet-600 rounded-lg px-4 py-2 hover:bg-violet-500 text-white' onClick={nextHandler} disabled={flashcards.length === 0}>Next</div>
        </div>
      </div>
    </>
  )
}

export default Home
