import React from 'react'
import MainList from '../Components/MainList/MainList'
// import Catalog from '../Components/Catalog/Catalog'

const Home = () => {
  return (
   <>
   {/* <Catalog/> */}
   <section className="Home">
    <div className="container">
   <MainList/>
    </div>
   </section>

   </>
  )
}

export default Home