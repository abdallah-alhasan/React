import React from 'react'
import Mapping from './components/Mapping'
import SearchFilter from './components/SearchFilter'
import Sorting from './components/Sorting'

export default function App() {
  return (
    <div>
      <SearchFilter />
	  <Mapping/>
	  <Sorting/>
    </div>
  )
}