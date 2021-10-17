const player = {
    currentChoice: null
  }
  const computer = {
    currentChoice: null
  }
  
  const choices = ["Rock", "Paper", "Scissors"];
  // Try changing the line below to test out the conditional!
  player.currentChoice = choices[0];
  
  function computerChooses(){
    const randomIndex = Math.floor(Math.random() * choices.length);
    computer.currentChoice = choices[randomIndex];
  }
  
  // Here, we removed the console.logs, and instead, stored the message in the displayResult function. We'll declare the displayResult function later, which we'll use to add the text to the HTML.
  function compareChoices(){
    computerChooses();
    if(computer.currentChoice === player.currentChoice){
      displayResult("It's a tie! The computer and player both chose " + computer.currentChoice);
    }else if(computer.currentChoice === choices[0]){
      if(player.currentChoice === choices[1]){
        displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
      }else{
        displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
      }
    }else if(computer.currentChoice === choices[1]){
      if(player.currentChoice === choices[2]){
        displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
      }else{
        displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
      }
    }else if(computer.currentChoice === choices[2]){
      if(player.currentChoice === choices[0]){
        displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
      }else{
        displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
      }
    }
  }
  
  // The displayResult function creates a new paragraph element, called resultText, that adds the results from the compareChoices function above.
  function displayResult(result){ 
    const resultText = document.createElement('p');
    resultText.innerText = result;
    document.body.appendChild(resultText);
  }
  
  // Don't forget to call the function to make the game run!
  compareChoices();
  