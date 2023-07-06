import React from 'react'
import Layout from '../components/HomePageComponents/Layout'
// import Search from '../components/HomePageComponents/Search'
import ListOfBodyParts from '../components/HomePageComponents/ListOfBodyParts'
import Exercises from '../components/HomePageComponents/Exercises'

const HomePage = () => {
   return (
      <div className="home-page">
         <Layout />
         {/* <Search /> */}
         <ListOfBodyParts />
         <Exercises />  
      </div>
   )
}

export default HomePage