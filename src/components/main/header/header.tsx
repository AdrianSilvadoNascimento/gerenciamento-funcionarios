import React from 'react'

import './header.scss'

export function Header() {
  return (
    <section>
      <a href="">
        <h1>Gestão de Funcionários</h1>
      </a>
      <div className='navigation'>
        <ul>
          <li>
            <a href="">Funcionários</a>
          </li>
          <li>
            <a href="">Clientes</a>
          </li>
          <li>
            <a href="">Sobre Nós</a>
          </li>
        </ul>
      </div>
    </section>
  )
}
