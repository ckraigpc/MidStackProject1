// user defined program made by yuson, ladaga and yuson.

// #Mid Full Stack Project 1



// #Game Mechanics
// #fire is weak against  water
// #electric is strong against water
// #electric is weak against fire


// #User Experiences
// # Generate Score for user vs computer
// # Display readable prompt message if user wins or loss
// # Provide a ui for electric, water, fire


// #PROGAM LOGIC
// # Create functions (win,loss, draw,getComputerChoice game,main)
// # Identify these functions which get a parameter or argument.
// # Implements listener event everytime the user picks among the elements
// # 

// #get all the elements in the DOM and undefined variables

// let computerScore = 0;
// let userScore = 0;
// const fire = document.getElementById('fire');
// const water = document.getElementById('water');


// // #game logic for getComputerChoice()
// function getComputerChoice(){
//     const choices = ["fire","water","flash"];
//     const random = Math.floor(Math.random() * 3);
//     return choices[random];
// }


// // #game logic for win()

// function win (userchoice,computerchoice){
//     userScore ++
    
// }


// // #game logic for loose()
// function lost (){
//     console.log("you lost");
// }

// // #game logic for draw()
// function draw(){
//     console.log("Draw")
// }




// // #logic for the whole game()
// function game(userchoice){
//     const compChoice = getComputerChoice();
//     switch(userchoice + compChoice){
//         case "waterfire":
//         case "flashwater":
//         case "fireflash":
//             win();
//             break;
//         case "firewater":
//         case "waterflash":
//         case "flashfire":
//             lost();
//             break;
//         case "firefire":
//         case "waterwater":
//         case "flashflash":
//            draw();
//             break;
//     }
// }

// // #run main()
// function main(){

//     fire.addEventListener('click',function)

//     fu
//     water.addEventListener('click', ()=>{
//         game("water");
//     });
//     flash.addEventListener('click', ()=>{
//         game("flash");
//     });
    
   
// }

// main();

//  define all variable first
const buttonToggle = document.getElementById('toggle');
const divContainer = document.querySelector('.container');
const inputDescription =  document.querySelector('input.description');
const buttonDescription = document.querySelector('button.description');
const paraDescription = document.querySelector('p');
const newItem = document.querySelector('input.newitem');
const buttonNewItem = document.querySelector('button.create')




buttonToggle.addEventListener('click',()=>{
    if(divContainer.style.display =="none"){
        buttonToggle.textContent ="HIDE"
        divContainer.style.display ="block";          
    }else{
        divContainer.style.display ="none";
        buttonToggle.textContent = "SHOW";
    }

});

// Node.appendChild()
// createElement()
buttonNewItem.addEventListener('click',()=>{
    // create an element <p>
    let paragraph = document.createElement('p');
    paragraph.textContent = newItem.value;
    divContainer.appendChild(paragraph);
    
});
   buttonDescription.addEventListener('click',()=>{
    paraDescription.innerHTML = inputDescription.value + ":";
    inputDescription.value = "";
});




