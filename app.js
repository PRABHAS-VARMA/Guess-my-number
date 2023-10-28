// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value=23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 5;
let highScore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector(".check").addEventListener("click",function(){
    const guess = Number(document.querySelector(".guess").value);
    if (!guess){
        // document.querySelector(".message").textContent = " 🤦‍♂️ No Number bruh!";
        displayMessage(" 🤦‍♂️ No Number bruh!");
    } else if (guess===secretNumber){
        // document.querySelector(".message").textContent = ` ✨🎇🎉Correct Number!  😎 Lessssssss goooooooooooo `;
        displayMessage("🦍Lessssssss gooooooo!🎉");
        document.querySelector(".number").textContent = secretNumber;


        document.querySelector("body").style.backgroundColor= "#60b347";

        document.querySelector(".number").style.width = "30rem";

        if (score>highScore){
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

    } else if (guess !== secretNumber){
        if(score>1){
            // document.querySelector(".message").textContent = guess > secretNumber ?   "🙉 Too High bruh!" : "🙊 Too Low bruh!" ;
            displayMessage(guess > secretNumber ?   "🙉 Too High bruh!" : "🙊 Too Low bruh!");
            score--;
            document.querySelector(".score").textContent = score;
        }   else{
            // document.querySelector(".message").textContent = "🙈 You lost the game !";
            displayMessage("🙈 You lost the game !")
            document.querySelector(".score").textContent = 0;
            document.querySelector("body").style.backgroundColor= "#A20021";

        }      
    } 
    
    // else if (guess > secretNumber){
    //     if(score>1){
    //         document.querySelector(".message").textContent = "🙉 Too High bruh!";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     }   else{
    //         document.querySelector(".message").textContent = "🙈 You lost the game !";
    //         document.querySelector(".score").textContent = 0;
    //         document.querySelector("body").style.backgroundColor= "#A20021";

    //     }      
        
    // } else if (guess< secretNumber){
    //     if(score>1){
    //         document.querySelector(".message").textContent = "🙊 Too Low bruh!";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     }   else{
    //         document.querySelector(".message").textContent = "🙈 You lost the game bruh!";
    //         document.querySelector(".score").textContent = 0;
    //         document.querySelector("body").style.backgroundColor= "#A20021";

    //     }
    // }
});

document.querySelector(".again").addEventListener("click", function(){
    score = 5;
    secretNumber = Math.trunc(Math.random()*20)+1;

    // document.querySelector(".message").textContent = "Start guessing...";
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value= "";

    document.querySelector("body").style.backgroundColor= "#222";

    document.querySelector(".number").style.width = "15rem";
});
