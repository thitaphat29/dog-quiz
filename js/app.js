var index = 0;
var quizList = [];
var score = 0;

$(document).ready(function(){

	/* -- Declear objects-- */
	var QuestionNo_1 = {
		id : "ans-1-",
		question : "How many types of dogs are there in the world?",
		choices : ["342","340","250","400"],
		correct_answer : "340",
		explanation : "there are about 340 breeds recognized by Federation Cynologique Internationale (FCI), the world governing body of dog breeds, known as the World Canine Organization."
	};
	var QuestionNo_2 = {
		id : "ans-2-",
		question : "Normal adult dogs have how many teeth?",
		choices : ["24","38","42","32"],
		correct_answer : "42",
		explanation : "Adult dogs have 42 permanent teeth compared to a measly 32 average human teeth."
	};
	var QuestionNo_3 = {
		id : "ans-3-",
		question : "what is the favorite dog breed of Queen of England?",
		choices : ["Corgi","Basenji","Poddle","Pomeranian"],
		correct_answer : "Corgi",
		explanation : "The Pembroke Welsh Corgi, is the type of dog favored by the Queen of England."
	};
	var QuestionNo_4 = {
		id : "ans-4-",
		question : "Which TV series had a dog named K9 who was also a robot?",
		choices : ["Full House","Star Trek","Doctor Who","Law & Order"],
		correct_answer : "Doctor Who",
		explanation : "K-9, is the name of several fictional robotic canines in the long-running British science fiction television series, Doctor Who, first appearing in 1977."
	};
	var QuestionNo_5 = {
		id : "ans-5-",
		question : "Which dog breed is the smallest used in hunting?",
		choices : ["Smooth fox terrier","Miniature dachshund","Toy puddle","Chihuahua"],
		correct_answer : "Miniature dachshund",
		explanation : "Dachshunds are scent hound dog breeds who were breeds to hunt badgers and other tunneling animals, rabbits, and foxes."
	};
	var QuestionNo_6 = {
		id : "ans-6-",
		question : "Which dog breed is the World's largest dog breeds?",
		choices : ["Great Dane","English Mastiff","Neapolitan Mastiff","Irish Wolfhound"],
		correct_answer : "Great Dane",
		explanation : "A Great Dane currently holds the record for World's tallest living dog and tallest dog ever."
	};
	var QuestionNo_7 = {
		id : "ans-7-",
		question : "Which dog breed has a black tongue?",
		choices : ["Husky","Labrador","Weimaraner","Chow Chow"],
		correct_answer : "Chow Chow",
		explanation : "The chow chow and the Chinese Shar-Pei both have purple tongues; however, the chow chow is the only dog breed to have a purple tongue with purple gums and lips."
	};
	var QuestionNo_8 = {
		id : "ans-8-",
		question : "Which dog yodels instead of barks?",
		choices : ["Komondor","Otterhound","Basenji","Basset hound"],
		correct_answer : "Basenji",
		explanation : "Basenji's are known for being \"barkless\" and instead makes yodel type sounds or howl loudly."
	};
	var QuestionNo_9 = {
		id : "ans-9-",
		question : "What is Japanese dog breed?",
		choices : ["Chihuahua","Toy puddle","Shiba Inu","Shih Tzu"],
		correct_answer : "Shiba Inu",
		explanation : "Shiba Inu is one of Japanese dog breeds that have grown popular across the world. However, most are rare and only found in Japan."
	};
	var QuestionNo_10 = {
		id : "ans-10-",
		question : "Base on Guinness World Records, which dog breed the most expensive dog ever sold.",
		choices : ["Akita","Irish Wolfhound","Saluki","Tibetan mastiff"],
		correct_answer : "Tibetan mastiff",
		explanation : "With a price tag of 10 million Chinese yuan or $1,513,417, an 11-month-old red Tibetan mastiff became the world's costliest canine when sold by breeder Lu Liang to a Chinese multi-millionaire in March 2011."
	};
	/* ---------------------- */


	/* -- add object in the array -- */
	quizList.push(QuestionNo_1);
	quizList.push(QuestionNo_2);
	quizList.push(QuestionNo_3);
	quizList.push(QuestionNo_4);
	quizList.push(QuestionNo_5);
	quizList.push(QuestionNo_6);
	quizList.push(QuestionNo_7);
	quizList.push(QuestionNo_8);
	quizList.push(QuestionNo_9);
	quizList.push(QuestionNo_10);
	/* ----------------------------- */


	/*----!! Start the quiz here !!---- */
	
	$(".begin").click(function(){
		console.log("begin");
		showNextQuestion();
	});


	/*----  submit quiz form  ----- */

	$("form").on("click",".submit-answer", function(e){
		checkAnswer();
		if(index != 9){
			console.log("submit answer");
			e.preventDefault();

			
			displayScore();

			// clear log
			$("#quiz h3").text("");
			$(".answer").find("li").remove();


			index++;
			runQuestionnaire();	
		} else{
			e.preventDefault();
			

			$("#quiz h3").text("");
			$(".answer").find("li").remove();
			$("#quiz").css("display","none");
			$(".show-score h2").css("display","none");
			$(".final").css("display","block");
			$(".final-score").append(score);
		}	
	});


	/*----  Play again  ----- */

	$(".final").on("click",".newgame", function(e){
		e.preventDefault();
		index = 0;
		score = 0;

		
		$(".final").css("display","none");
		showNextQuestion();
	});

});

function showNextQuestion(){
		$(".intro").css("display","none");
		$(".final").css("display","none");

		$("#quiz").css("display","block");
		$(".show-score h2").css("display","block");


		runQuestionnaire();	
		displayScore();	
}

/* ----- Display questionnaire ---- */

function runQuestionnaire(){
	console.log("run question no. "+ index);
	var currentQuiz = quizList[index];
	
	//question
	$("form h3").append((index+1)+ ". " + currentQuiz.question);

	//answer
	for(var i=0; i<currentQuiz.choices.length; i++){
		$('ul').append('<li><input type="radio" name="answer" id="'+ currentQuiz.id + i + '" value="'+currentQuiz.choices[i]+'"><label for="' + currentQuiz.id + i +'">' + currentQuiz.choices[i] +'</label></li>'); 
	}

	
}


/* ----- Display score ---- */

function displayScore(){
	$(".score").text("");
	$(".show-score .score").append(" "+score+" /10");
}


/* ----- Check answer ---- */

function checkAnswer(){
	var currentQuiz = quizList[index];
	var the_answer = $('input[name="answer"]:checked').val();
	
	if(the_answer == currentQuiz.correct_answer){
		alert("You are correct!");
		score++;
	}else{
		alert("You are wrong!\n\n" + currentQuiz.explanation);
	}

}



