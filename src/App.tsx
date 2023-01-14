import { useState } from 'react'
import { Header } from './components/main/header/header'
import './App.scss'

export default function App() {
  let [name, setName] = useState('')

  function getNameValue(props: any) {
    setName(props.target.value)
  }

  return (
    <section>
      <Header/>
      {/* <h2>Olá</h2>
      <form>
        <input 
          type="text" 
          placeholder="Preencher com o nome" 
          onChange={getNameValue}/>
          <button>Get Name</button>
        <div>
          <h2>Hello, {name}!</h2>
        </div>
      </form> */}
    </section>
  )
}
