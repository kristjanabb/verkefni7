/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  let playGame = confirm("Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.")
  
  while (playGame){
    play();

    playGame = confirm("Viltu spila nýjan leik?");
  } 
}

function play() {

  let spiladirLeikir = 0;
  let stig = 0;

  let nyrTimi = new Date();
  
  let askQuestion = ask();
  spiladirLeikir += 1;

  while (spiladirLeikir < GAMES_TO_PLAY) {

    if (askQuestion) {
      stig += 1;
    }

    else if (askQuestion == null) {
      alert("Hætt í leik.");
      return null;
    }
    else {
      stig = stig;
    }

    askQuestion = ask();
    spiladirLeikir += 1;
  }

  let lokaTimi = new Date();
  let heildarTimi = (lokaTimi - nyrTimi)/1000;

  if (stig > 0) {
    return confirm(`Þú svaraðir ${stig} af 10 dæmum réttum á ${lokaTimi.toFixed(2)} sekúndum \nMeðalrétt svör á sekúndu eru ${(lokaTimi/stig).toFixed(2)}.`);
  }
  else {
    return confirm(`Þú svaraðir 0 af 10 dæmum réttum á ${lokaTimi.toFixed(2)} sekúndum \nMeðalrétt svör á sekúndu eru 0.`);
  }
}

function ask() {
   let newQuestion = getQuestion();

   let userAnswer = prompt(newQuestion.question);
 
   if (newQuestion.answer == userAnswer) {
     return true;
   }
   else if (userAnswer === null) {
     return null;
   }
   else {
     return false;
   }
}
function getQuestion() {
 let question = "Hvað er ";
 let answer = 0;
 let stig = 0;

 let questionType = randomNumber(1, 4);   
 let a = 0;
 let b = 0;

 switch(questionType) {

   case 1:
     a = randomNumber(1, 100);
     b = randomNumber(1, 100);
     question += `${a} + ${b}?`;
     answer = a + b;
     break;

   case 2:
     a = randomNumber(1, 100);
     b = randomNumber(1, 100);
     question += `${a} - ${b}?`;
     answer = a - b;
     break;
  
   case 3:
     a = randomNumber(1, 10);
     b = randomNumber(1, 10);
     question += `${a} * ${b}?`
     answer = a * b;
     break;

   case 4:
     a = randomNumber(2, 10);
     b = a * randomNumber(2, 10);
     question += `${b} / ${a}?`
     answer = b / a;
     break;
 }

 return {question, answer};
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();