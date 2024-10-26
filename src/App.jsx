import {useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Players from './Players/Players'
import Availablenav from './components/Availablenav/Availablenav'
import Selected from './components/Selected/Selected'

import {toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

    //const [addPlayer, setAddPlayer] = useState(0);
    //for use handle Choosen player and add Choosen player in the selection Component
    // const [choosePlayer, setChoosePlayer] = useState([]);
    // const handleAddToSelected = (player, addedPlayers) =>{
    //   const newChoosePlayer = [...choosePlayer, addedPlayers]
    //   setChoosePlayer(newChoosePlayer);
    //   //console.log(player)
    //   const newAddedPlayer = addPlayer + player;
    //   setAddPlayer(newAddedPlayer);
    //   if(newAddedPlayer.length  === 6){
    //     alert("You have selected 6 players!");
    //   }
    // }

  //adding nomber of player
  const [choosePlayer, setChoosePlayer] = useState([]);

  const handleAddToSelected = (player) => {
    //const selectedCount = choosePlayer.length;
    if (coin < player.price) {
      //const newChoosePlayer = [...choosePlayer, player];
        //setChoosePlayer(newChoosePlayer);
        toast.warn('Please Claim Free Credit',{
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    } 
    else if(choosePlayer.some(players => players.name === player.name)){

      toast.warn(`${player.name} already selected !`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else if(choosePlayer.length >= 6){
     // setCoin(coin - player.price)
      toast.warn('You can select only 6 players!',{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else{
        //alert("You can select only 6 players");
        // toast.error('You can select only 6 players')
        const newChoosePlayer = [...choosePlayer, player];
        setChoosePlayer(newChoosePlayer);
        //setChoosePlayer([...choosePlayer, player]);
        setCoin(coin - player.price);

        toast.success(`Congrats!! ${player.name} is now in your squad`,{
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    }
  };

  const deleteSelectedPlayer = (playerToRemove) =>{
    const updatedPlayers = choosePlayer.filter(
      (player) => player.name !== playerToRemove.name
  );
  setChoosePlayer(updatedPlayers);
  }
//
  return (
    <>
    <ToastContainer/>
      <Header  coin={coin} ></Header>
      <main>
        <Banner handleCoin={handleCoin} />

        {/* Conditional rendering on button for show Selected and Players Components*/}
        <Availablenav handleAvailable={handleAvailable} handleSelected={handleSelected} selectedCount={choosePlayer.length} />

        {/* when click  Available & Add More Player btn the show players Components also show Always Available component*/}
        {selected && <Players handleAvailable={handleAvailable} handleAddToSelected={handleAddToSelected}></Players>}
        
        {/* when click  Selected show Selected Component*/}
        {!selected &&  <Selected handleSelected={handleSelected} choosePlayer={choosePlayer} deleteSelectedPlayer={deleteSelectedPlayer}></Selected>}

      </main>
      <Footer></Footer>
    </>
  )
}

export default App