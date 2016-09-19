import React, { Component } from 'react'
import Post from './Post'
import PostForm from './PostForm'

export default class App extends Component {
  render() {
    return (
      <main>
        <h1>Noticias</h1>
        <Post id={1} name="Episodio 2002 “Skank Hunt” Comunicado de prensa">
          La pesca de arrastre en Twitter continúa en un nuevo episodio
          se estrenará Miércoles 21 de septiembre a 22:00 ET / PT en Comedy Central
        </Post>
        <PostForm />
      </main>
    )
  }
}
