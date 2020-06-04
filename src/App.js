import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import boondocks from "./boondocks.json";
import Header from "./components/Header"

class App extends Component
{
  // Setting this.state. for booondocks and score 
  state = {
    boondocks: App.getBoondocksCopy(),
    score: 0,
    highScore: 0
  };

  imageClicked = id =>
  {

    // loop through boondocks json to find element by id
    // for (let i = 0; i < this.state.boondocks.length; i++) {
    //   const element = this.state.boondocks[i];
    //   if (element.id === id) {
    //     // Check the state of clicked
    //     if (element.clicked === true) {
    //       // game over
    //     }else {
    //       element.clicked = true
    //       // increment score
    //     }
    //   }
    // }

    // Filter this.state.friends for friends with an id not equal to the id being removed
    const boondock = this.state.boondocks.find( boondock => boondock.id === id );
    // @ts-ignore
    if ( boondock.clicked === true )
    {
      // game over
      alert( "Game Over" )
      this.setHighScore(this.state.score)
      this.restartGame()
    } else
    {
      // @ts-ignore
      boondock.clicked = true
      this.setState( { score: this.state.score + 1 } )
      this.shuffle()
      console.log( this.state.score )
    }

  };

  shuffle = () =>
  {
    this.state.boondocks.forEach( boondock =>
    {
      // @ts-ignore
      boondock.sequence = Math.random()
    } );
    // @ts-ignore
    this.state.boondocks.sort( ( a, b ) => a.sequence - b.sequence )
    this.setState( { boondocks: this.state.boondocks } )


  }


  restartGame = () =>
  {
    

    this.setState( { boondocks: App.getBoondocksCopy() } )
    this.setState( { score: 0 } )
    


  }


  setHighScore = (currentScore) => {
    if (currentScore > this.state.highScore) {
      this.setState({highScore: currentScore})
    }
  }


  static getBoondocksCopy = () => {
    return JSON.parse(JSON.stringify(boondocks))
  }




  // Map over this.state.friends and render a FriendCard component for each friend object
  render ()
  {
    return (
      <Wrapper>
        <Header
          score={this.state.score}
          highScore={this.state.highScore}>

        </Header>

        {this.state.boondocks.map( boondock => (
          <FriendCard

            id={boondock.id}
            key={boondock.id}
            name={boondock.name}
            image={boondock.image}
            imageClicked={this.imageClicked}


          />
        ) )}
      </Wrapper>
    );
  }
}

export default App;
