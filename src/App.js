import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import boondocks from "./boondocks.json";

class App extends Component
{
  // Setting this.state.friends to the friends json array
  state = {
    boondocks,
    score:  0
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
      this.restartGame()
    } else
    {
      // @ts-ignore
      boondock.clicked = true
      this.setState({score: +1})
      this.shuffle()
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
    // reset score = 0

    this.setState( { boondocks } )
    this.setState({score: 0})

    this.shuffle()


  }




  // Map over this.state.friends and render a FriendCard component for each friend object
  render ()
  {
    return (
      <Wrapper>
        <Title> Boondocks Memory Game </Title>
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
