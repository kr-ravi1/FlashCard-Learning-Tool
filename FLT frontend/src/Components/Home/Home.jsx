import NavBar from '../NavBar/NavBar.jsx'
import FlashCard from '../FlashCard/FlashCard.jsx'
import { useEffect, useState } from 'react'

function Home() {
  const [flashcard, setFlashcard] = useState();
  const[number, setNumber] = useState(1);
  const[maxNum, setMaxNum] = useState(1);

  useEffect(() => {
    const fetchFlashcard = async () => {
      try{
        const maxResponse = await fetch(`http://localhost:8080/api/maxCardNumber`);
        const maxCardNumber = await maxResponse.json(); 
        setMaxNum(maxCardNumber);
        const response = await fetch(`http://localhost:8080/api/card?cardNumber=${number}`);
        if (!response.ok) {
          throw new Error('Failed to fetch flashcards');
        }
        const data = await response.json();
        setFlashcard(data);
      } catch(err) {
        console.log(err);
      }
    };

    fetchFlashcard(); 
  }, [number]);

  const prevHandler = () => {
    setNumber(number > 1 ? number - 1 : maxNum);
  }

  const nextHandler = () => {
    setNumber(number < maxNum ? number + 1 : 1);
  }

  return (
    <>
      <NavBar btn={"Admin Page"} to={"/admin"}/>
      <div>
        <div className='w-full flex items-center justify-center text-gray-900 my-5 gap-10 '>
          <div className='flex items-center'>
              <div className='mr-2'><label htmlFor="options" className="mb-1">Difficulty</label></div>
              <div><select
                  id="options"
                  // value={difficulty}
                  // onChange={onChangeDifficulty}
                  className="p-2 border rounded-md w-28"
              >
                  <option value="">Select</option>
                  <option value="EASY">EASY</option>
                  <option value="MEDIUM">MEDIUM</option>
                  <option value="HARD">HARD</option>
              </select></div>
          </div>
          <div className='flex items-center'>
              <div className='mr-2'><label htmlFor="options" className="mb-1">Category</label></div>
              <div><select
                  id="options"
                  // value={category}
                  // onChange={onChangeCategory}
                  className="p-2 border rounded-md w-28"
              >
                  <option value="">Select</option>
                  <option value="OS">OS</option>
                  <option value="DBMS">DBMS</option>
                  <option value="OOPS">OOPS</option>
                  <option value="MISC">MISC</option>
                  <option value="CN">CN</option>
              </select></div>
          </div>
          <div>
            <div className='cursor-pointer bg-violet-600 rounded-lg px-4 py-2 hover:bg-violet-500 text-white'>Apply Filter</div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center m-10'>
        <div className='cursor-pointer bg-violet-600 rounded-lg px-4 py-2 hover:bg-violet-500 text-white' onClick={prevHandler}>Prev</div>
        {flashcard?(<FlashCard quesNumber={flashcard.cardOrder} question={flashcard.question} answer={flashcard.answer} difficulty={flashcard.difficulty} category={flashcard.category} />) : (<p>Loading...</p>)}
        <div className='cursor-pointer bg-violet-600 rounded-lg px-4 py-2 hover:bg-violet-500 text-white' onClick={nextHandler}>Next</div>
      </div>
    </>
  )
}

export default Home
