import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Players from './Players/Players'
import Anailablenav from './components/Availablenav/Anailablenav'

function App() {

  //set Claim Free Credit
  const [coin, setCoin] = useState(0);
  // function handle button every click add money
  const handleCoin = () =>{
    setCoin(coin + 100) 
  }

  return (
    <>
      <Header coin={coin}></Header>
      <main>
        <Banner handleCoin={handleCoin}></Banner>
        <Anailablenav></Anailablenav>
        <Players></Players>
      </main>

      <Footer></Footer>
    </>
  )
}

export default App