import React, { Component } from 'react'
import PostList from './PostList'
import PostForm from './PostForm'

export default class App extends Component {
  render() {
    const data = [
      {
        id: 1,
        name: 'South Park consigue un canal Giphy',
        description:
          `Cada momento de South Park imaginables etiquetado
          y organizado por temporada, episodio, carácter, reacción, eslogan y más.`
      },
      {
        id: 2,
        name: 'South Park devoluciones para la temporada 20 el 14 de septiembre a las 10 pm',
        description: 'South Park devoluciones para la temporada 20'
      },
      {
        id: 3,
        name: 'Episodio 2001 “Bayas miembros” Comunicado de prensa',
        description:
          `South Park temporada 20 se inicia con un nuevo episodio
          se estrenará Miércoles, 14 de septiembre a 22:00 ET / PT en Comedy Central`
      }
    ]

    return (
      <main>
        <h1>Noticias</h1>
        <PostForm />
      </main>
    )
  }
}
