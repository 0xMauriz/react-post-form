import { useState } from 'react'
import './App.css'
import CreateCardList from './assets/components/CreateCardList.jsx'

function App() {


  return (
    <>
      <div className='h-80 w-80 py-3 d-flex flex-nowrap justify-content-around'>
        <CreateCardList />
      </div>
    </>
  )
}

export default App
