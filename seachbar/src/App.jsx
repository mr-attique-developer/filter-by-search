import React from 'react'
import SearchBySeachInput from './components/SearchBySeachInput'
import ReactDataTable from './components/ReactDataTable'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
   <>
   <Routes>

    <Route path='/' element={<ReactDataTable/>}/>
    <Route path='/search' element={<SearchBySeachInput/>}/>
   </Routes>

   </>
  )
}

export default App