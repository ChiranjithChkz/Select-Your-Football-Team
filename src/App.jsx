
import { Suspense, useState } from 'react'
import './App.css'

 import { ToastContainer} from 'react-toastify';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'

const fetchPlayers = async () => {
  const res = await fetch("/player.json")
  return res.json()
}
const playerPromise = fetchPlayers()

function App() {

  const [toggle, setToggle] = useState(true);
  const [AvailableBalance, setAvailableBalance] = useState(600)
  const [purchasedPlayers, setPurchasedPlayers] = useState([])

  const removePlayer = (p) =>{
    const filteredData = purchasedPlayers.filter(ply => ply.id !== p.id)
    console.log(filteredData)
    setPurchasedPlayers(filteredData)
    setAvailableBalance(AvailableBalance+p.price)
  }

 


  return (
    <>
      <Navbar AvailableBalance={AvailableBalance}></Navbar>

      <div className='  max-w-[1200px] mx-auto flex justify-between items-center'>
        <h1 className='font-bold text-2xl'>{toggle === true ? "Available": `Selected Player(${purchasedPlayers.length}/18)`}</h1>
        <div className='font-bold'>
           <button onClick={()=> setToggle(true)} className={`p-3 border border-gray-400 rounded-l-2xl border-r-0 ${toggle === true ?"bg-[#E7FE29]":" " }`}>Available</button>
           <button onClick={()=> setToggle(false)} className={`p-3 border border-gray-400 rounded-r-2xl border-l-0 ${toggle === false ? "bg-[#E7FE29]":" "}`}>Selected <span>({purchasedPlayers.length})</span></button>
        </div>
      </div>

      {
         toggle === true ?  <Suspense fallback={
        <span className="loading loading-ring loading-xl   "></span>}>
        <AvailablePlayers setPurchasedPlayers={setPurchasedPlayers} purchasedPlayers={purchasedPlayers} AvailableBalance={AvailableBalance} setAvailableBalance={setAvailableBalance} playerPromise={playerPromise}></AvailablePlayers>
      </Suspense> : 
      <SelectedPlayers removePlayer={removePlayer} purchasedPlayers={purchasedPlayers}></SelectedPlayers>

      }
     <ToastContainer/>

    </>
  )
}

export default App
