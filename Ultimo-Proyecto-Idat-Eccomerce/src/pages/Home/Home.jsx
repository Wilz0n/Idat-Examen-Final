import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';

const Home = () => {

  const [categary,setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu categary={categary} setCategory={setCategory}/>
    </div>
  )
}

export default Home;