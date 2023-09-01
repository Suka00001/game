let userscore =0;
let computerscore = 0;
const userscore_span= document.getElementById('user-score');
const computerscore_span= document.getElementById('computer-score');
const scoreBoard_div= document.querySelector('.score-board');
const result_p= document.querySelector('.result>p');
const rock_div= document.getElementById('r');
const paper_div= document.getElementById('p');
const scissor_div= document.getElementById('s');
const text_p= document.getElementById('action-message');

function getComputerChoice(){
    const options=['r','p','s'];
    const index= Math.floor(Math.random()*options.length);
    return options[index];
}
function convertToWord(letter){
    if(letter=== "r") return "Rock";
    if(letter=== "p") return "Paper";
    return "Scissors";
}

function win(user,comp){
  userscore++;
  userscore_span.innerHTML= userscore;
  computerscore_span.innerHTML= computerscore;
  const fireEmoji = "\u{1F525}";
  result_p.innerHTML= `${convertToWord(user)}<sub><span class="user-text">user</span></sub> beats ${convertToWord(comp)}<sub><span class="user-text">comp</span></sub> . You Win ${fireEmoji}`;
  const userselect=document.getElementById(user);
  userselect.classList.add('green-glow');
  setTimeout(()=>userselect.classList.remove('green-glow'),300);
}
function lose(user,comp){
    computerscore++;
    userscore_span.innerHTML= userscore;
    computerscore_span.innerHTML= computerscore;
    const cryingEmoji = "\u{1F622}";
    result_p.innerHTML= `${convertToWord(user)}<sub><span class="user-text">user</span></sub> loses to ${convertToWord(comp)}<sub><span class="user-text">comp</span></sub> . You lose ${cryingEmoji}`;
    text_p.innerHTML=`Oops!!!! Make your choice again. `
    const userselect=document.getElementById(user);
    userselect.classList.add('red-glow');
    setTimeout(()=>userselect.classList.remove('red-glow'),300);
}
function draw(user,comp){

    userscore_span.innerHTML= userscore;
    computerscore_span.innerHTML= computerscore;
    const smileEmoji = "\u{1F60A}";
   result_p.innerHTML= `${convertToWord(user)}<sub><span class="user-text">user</span></sub> = ${convertToWord(comp)}<sub><span class="user-text">comp</span></sub> . It's a draw ${smileEmoji}`;
   const userselect=document.getElementById(user);
   userselect.classList.add('gray-glow');
    setTimeout(()=>userselect.classList.remove('gray-glow'),300);
}
function game(userChoice){
    const computerChoice= getComputerChoice();
   switch(userChoice+computerChoice){
     case "rs":
        case "pr":
            case "sp":
                win(userChoice,computerChoice);
                break;
                case "rp":
                    case "ps":
                        case "sr":
                           lose(userChoice,computerChoice);
                            break;
                            case "rr":
                                case "ss":
                                    case "pp":
                                       draw(userChoice,computerChoice);
                                        break;

   }
}
function main(){
    rock_div.addEventListener('click',function(){
        game("r");
     });
     paper_div.addEventListener('click',function(){
        game("p");
     });
     scissor_div.addEventListener('click',function(){
        game("s");
     });
     
    }
    main();

