//Home.jsx

import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {

  const [categary,setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu categary={categary} setCategory={setCategory}/>
      <FoodDisplay categary={categary}/>
      <AppDownload/>
    </div>
  )
}

export default Home;