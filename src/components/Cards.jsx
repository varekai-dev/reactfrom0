import React from 'react'
import {Card} from './Card'

export class Cards extends React.Component{
 state = {
   movies: []
 }
componentDidMount() {
  const API = '91457c97'
  
  fetch(`http://www.omdbapi.com/?apikey=${API}&s=batman`)
  .then(response => response.json())
  .then(data => this.setState({movies: data.Search}))
}

  render(){
    const {movies} = this.state
    return(
      <>
     
      {movies.map(movie=>{
        return(
        <Card key={movie.imdbID} movies={movie}/>
        )
      })}
     
    
      </>
    )
  }
}