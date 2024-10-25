import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Players from './Players/Players'
import Availablenav from './components/Availablenav/Availablenav'
import Selected from './components/Selected/Selected'

function App() {

  //set Claim Free Credit
  const [coin, setCoin] = useState(0);
  // function handle button every click add money
  const handleCoin = () =>{
    setCoin(coin + 90000000) 
  }


  // Functions for show the Components
  const [selected, setSelected] = useState(true);
  const handleSelected = () => setSelected(true);
  const handleAvailable = () => setSelected(false);


  return (
    <>
      <Header  coin={coin} ></Header>
      <main>
        <Banner handleCoin={handleCoin} />

        {/* Conditional rendering on button for show Selected and Players Components*/}
        <Availablenav handleAvailable={handleAvailable} handleSelected={handleSelected} />

        {/* when click  Available & Add More Player btn the show players Components also show Always Available component*/}
        {selected && <Players handleAvailable={handleAvailable}></Players>}
        
        {/* when click  Selected show Selected Component*/}
        {!selected &&  <Selected handleSelected={handleSelected}></Selected>}

      </main>
      <Footer></Footer>
    </>
  )
}

export default App