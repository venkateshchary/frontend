import { useState } from 'react'
import './App.css'
import CompanyCard from './components/CompanyCard.tsx'


function App() {
  return (
    <>
    <CompanyCard companyDetails={{name:'Apree Health', duration:'2021-2023'}} />
    <CompanyCard companyDetails={{name:'Zelis Healthcare', duration:'2023-Present'}} />
    </>
  )
}

export default App
