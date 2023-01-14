import { useState } from 'react'
import { Header } from './components/main/header/header'
import MainBody from './components/main/main/main-body'
import './App.scss'

export default function App() {
  return (
    <>
      <section>
        <Header />
      </section>
      <div>
        <MainBody />
      </div>
    </>
  )
}
