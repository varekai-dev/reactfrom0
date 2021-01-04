import React from 'react'

export class Card extends React.Component{
  render(){
  const  {Poster,Title, Type, Year} =this.props.movies
    return(
      
        <div className="card">
          <div className="card-image">
            <div className="img-overlay"></div>
            <img src={Poster} alt={Title}/>
            <span className="card-title">{Title}</span>
          </div>
         
          <div className="card-action">
           <span> Type: {Type}</span><span>Year: {Year}</span>
          </div>
        </div>
     
    )
  }
}