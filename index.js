  var readLineSync=require("readline-sync");
  var score=0;
  var userName=readLineSync.question(" Please give me your name ");
  console.log(" Welcome ",userName ,"to GK game! ");
  var acceptance=readLineSync.question(" Are you ready to answer? Enter Y to start the game ")


  var questions=[questionOne={
  question:" How many union territories are there in india?",
  options: " A. 6 \n B. 7 \n C. 8 \n D. 9 \n",
  answer: "C"
  },
  questionTwo={
    question:" Which of the following is the capital of Arunachal Pradesh?",
    options:" A. Itanagar \n B. Dispur \n C. Imphal \n D. Panaji \n",
    answer:"A"
  },
  questionThree={
    question:" What are the major languages spoken in Andhra Pradesh?",
    options:" A. English and Telugu \n B. Telugu and Urdu \n C. Telugu and Kannada \n D. All of the above languages \n",
    answer:"B"
  },
  questionFour={
    question:" What is the state flower of Haryana?",
    options:" A. Lotus \n B. Rhododendron \n C. Golden Shower \n D. Not declared \n",
    answer:"A"
  },
  questionFive={
    question:" Which is the largest coffee producing state of India?",
    options:" A. Kerala \n B. Tamil Nadu \n C. Karnataka \n D. Arunachal Pradesh \n",
    answer:"C"
  }];


  function play(question,answer,options){
  console.log(question);
  var userAnswer=readLineSync.question(options);
  if(userAnswer===answer){
    console.log(" You are right!");
    score=score+1;
    console.log(" current score is: ",score);
  }else {
    console.log("You are wrong!");
    console.log (" current score is: ",score);
  }

  }

  if(acceptance==="Y"){
  console.log (" Please enter the correct option to score for the below questions");
  for(var i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer,questions[i].options);
  }

  }else {
    console.log(" You are out of the game! Try again later")
  }
  console.log(" Your final score is: ",score);

