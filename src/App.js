import React from "react";
import PromptAndDetails from "./PromptAndDetails";
import cards from './CardsData'
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      prompt: cards[0].prompt,
      details: cards[0].details,
    };
  }
  RandomCard() {
    const randomNumber = Math.floor(Math.random() * cards.length);
    return cards[randomNumber];

  }
  shuffleCards(array){
    return array.sort(()=>Math.random()-0.5)
  }

  handleClick = () => {
    const generateRandomCard = this.RandomCard();
    this.setState({
      prompt: generateRandomCard.prompt,
      details: generateRandomCard.details
    });
    this.shuffleCards(cards)
  };

  randomColor() {
    var colors = ['234,181,54']
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    return `rgb(color)`;
  } 

  render() {
    return (
      <div>
        <PromptAndDetails
          displayColor={this.randomColor}
          handleClick={this.handleClick}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;
