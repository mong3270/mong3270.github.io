// console.log("hello world!");

// window.prompt("what is your name?");

var yesanswers = 0;

console.log("This is personality test, answer by Yes or No. Is sleeping better than eating? Answer with sleep()");

function sleep(answer) {
	if (answer == "yes") {
		yesanswers++;
	}
	console.log("OK Do you like being alone when you are tired and not in the mood.. answer with alone()");
}

function alone(answer) {
	if (answer == "yes") {
		yesanswers++;
	}
	console.log("OK - next question here..");
}

function loud(answer) {
	if (answer == "yes") {
		yesanswers++;
	}
	console.log("OK - next question here..");
}

function emotion(answer) {
	if (answer == "yes") {
		yesanswers++;
	}
	console.log("OK - next question here..");
}




function lastquestion(answer) {

			if (answer == "yes") {
		yesanswers++;
	}

	if (yesanswers > 5 ) {

		console.log("you are type A");
	} else {

				console.log("you are type b");

	}

}


