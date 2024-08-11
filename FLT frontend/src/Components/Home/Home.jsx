import NavBar from '../NavBar/NavBar.jsx'
import FlashCard from '../FlashCard/FlashCard.jsx'

function Home() {

  return (
    <>
      <NavBar btn={"Admin Page"} to={"/admin"}/>
      <div className='flex justify-center items-center m-10'>
        <div className='cursor-pointer'>Prev</div>
        <FlashCard quesNumber="1" question="What is React in java in cpp in python i know you don't know the answer." answer="A JavaScript library forit officiis voluptate repellat." />
        <div className='cursor-pointer'>Next</div>
      </div>
    </>
  )
}

export default Home
