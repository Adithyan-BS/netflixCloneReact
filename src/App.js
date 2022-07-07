import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import {action,originals,trending,comedy,romance,horror} from './urls'
import './App.css'
import RowPost from './components/RowPost/RowPost'
function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={trending}  title="Trending" isSmall/>
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={romance} title="Romance" isSmall />
      <RowPost url={horror} title="Horror" isSmall />



      

    </div>
  );
}

export default App;
