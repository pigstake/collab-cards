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
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
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
